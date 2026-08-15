FROM node:24.14.0-alpine
LABEL authors="tatiana"

WORKDIR /app

COPY package*.json ./
COPY ./src ./src

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]