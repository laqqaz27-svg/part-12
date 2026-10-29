FROM node:24-slim

WORKDIR /app

COPY backend/package*.json ./
RUN npm ci

EXPOSE 3003

CMD ["npm", "run", "dev"]
