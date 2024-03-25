FROM node:lts
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 1337
ENV NODE_ENV production
CMD [ "npm", "start" ]
