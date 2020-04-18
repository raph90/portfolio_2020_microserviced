FROM node:12.16.2-alpine3.9 as builder

WORKDIR '/app'
COPY ./package.json ./ 
RUN npm install 
COPY . . 
RUN npm run build

FROM nginx 
EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/public /usr/share/nginx/html