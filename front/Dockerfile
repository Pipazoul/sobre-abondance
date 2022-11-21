FROM node:lts as prod

COPY . /app

WORKDIR /app

RUN ls
RUN npm ci --legacy-peer-deps

RUN npm run build

ENTRYPOINT [ "node",  "./build/index.js"]  

EXPOSE 3000