FROM node:24

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

ENV DEBUG=playground:*

USER node

CMD ["npm", "start"]