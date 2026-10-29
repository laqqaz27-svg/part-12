FROM node:24-slim

WORKDIR /app

COPY backend/package*.json ./
RUN npm ci --omit=dev

COPY backend/ ./

ENV NODE_ENV=production
ENV PORT=3003

EXPOSE 3003

CMD ["npm", "start"]
