FROM node:11-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .
