FROM node:14-slim 

WORKDIR /usr/src/app

EXPOSE 3000

COPY . . 

RUN npm install 
RUN npm run build 
RUN npm install -g serve 

CMD [ "serve", "-s", "-l", "3000", "build" ]