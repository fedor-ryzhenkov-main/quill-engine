# Building the app
FROM node:latest as builder
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]