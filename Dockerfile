FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm build

ENV PROT=3003

EXPOSE 5000

CMD ["npm", "start"]