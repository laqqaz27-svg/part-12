FROM node:24 AS base

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

FROM base AS test-stage

RUN npm test

FROM test-stage AS build-stage

ENV VITE_BACKEND_URL=/api

RUN npm run build

FROM nginx:1.29-alpine AS production-stage

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
