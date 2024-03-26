import React, {useCallback, useEffect, useState} from 'react';

// Define the characters that can be used for scrambling
const LATIN_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SPECIAL_CHARACTERS = '!@#$%^&*()-_=+[]{};:,.<>/?~`';

let scramble_speed = 500;

// Generates a random character from the specified character set
const generateRandomCharacter = (includeSpecial: boolean): string => {
    const characters = LATIN_LETTERS + NUMBERS + (includeSpecial ? SPECIAL_CHARACTERS : '');
    return characters[Math.floor(Math.random() * characters.length)];
};

// Checks if a character is a latin letter or a special character
const isScrambleEligible = (char: string): boolean => {
    return /^[A-Za-z]$/.test(char); // This regex matches only Latin letters
};

// Generates an object that represents a scrambled character
const generateScrambledObject = (originalChar: string, isScrambling: boolean, scrambleEligible?: boolean) => {
    // Determine eligibility only if it's not provided
    const eligible = scrambleEligible !== undefined ? scrambleEligible : isScrambleEligible(originalChar);
    const scrambleChar = eligible && isScrambling ? generateRandomCharacter(true) : originalChar;
    return {
        originalChar,
        scrambleChar,
        scrambleEligible: eligible, // Store the eligibility
        scrambleTime: Date.now() + Math.random() * scramble_speed // Randomize the time for the scrambling effect
    };
};
// Transforms a string into an array of scrambled objects
const stringToScrambleObjects = (str: string, isScrambling: boolean, prevScrambledObjects?: any[]) => {
    return [...str].map((char, index) => {
        // Use previous eligibility if available
        const prevObj = prevScrambledObjects ? prevScrambledObjects[index] : undefined;
        return generateScrambledObject(char, isScrambling, prevObj ? prevObj.scrambleEligible : undefined);
    });
};

// Recursively scrambles the text of React children elements
// @ts-ignore
const scrambleChildren = (children: React.ReactNode, isScrambling: boolean) => {
    return React.Children.map(children, (child) => {
        if (typeof child === 'string') {
            return stringToScrambleObjects(child, isScrambling)
                .map(obj => obj.scrambleChar)
                .join('');
        } else if (React.isValidElement(child) && child.props.children) {
            return React.cloneElement(child, {
                ...child.props,
                children: scrambleChildren(child.props.children, isScrambling)
            });
        }
        return child;
    });
};

// The Scramble component that applies the scrambling effect to its children
const Scramble: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [hover, setHover] = useState(false);

    const toggleHover = useCallback(() => {
        setHover(!hover);
        hover ? scramble_speed = 100000000 : scramble_speed = 500
    }, [hover]);

    const [isScrambling, setIsScrambling] = useState(true);
    const [renderTrigger, setRenderTrigger] = useState(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (isScrambling) {
            intervalId = setInterval(() => {
                // Trigger a re-render to show the scrambling effect
                setRenderTrigger(prev => !prev);
            }, 100);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [isScrambling]);

    const toggleScrambling = () => {
        setIsScrambling(prev => !prev);
    };

    const scrambledChildren = scrambleChildren(children, isScrambling);

    return <span className={"interactable-click"} onClick={toggleScrambling} onMouseEnter={toggleHover} onMouseLeave={toggleHover}><span style={{color: '#C91F37', fontWeight: '800'}}>[</span> {scrambledChildren} <span style={{color: '#C91F37', fontWeight: '800'}}>]</span></span>;
};

export default Scramble;
