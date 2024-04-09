import { useMediaQuery } from 'react-responsive'
import React from "react";

export const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });

  if (isDesktop) {
    return <>{children}</>;
  }

  // return null when not on Desktop
  return null;
};

export const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  if (isMobile) {
    return <>{children}</>;
  }

  // return null when not on Desktop
  return null;
};