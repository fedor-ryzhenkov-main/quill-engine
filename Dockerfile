# Building the app
FROM node:latest as builder
WORKDIR /app
COPY package*.json ./
RUN npm install - force
COPY . .
RUN npm run build
FROM nginx:1.21-alpine
COPY --from=builder /build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off"]