FROM node:18-alpine3.16 as builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21.1
COPY --from=builder /app/build/ /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/templates/app.conf.template