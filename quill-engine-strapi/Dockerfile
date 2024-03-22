FROM node:lts

WORKDIR /app/strapi-app
COPY ./package*.json ./
RUN npm install
COPY . .

ENV NODE_ENV production
CMD ["npm", "run", "develop"]
