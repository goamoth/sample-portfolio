# BUILDER
FROM node:18-alpine as builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build 

# Bundle static assets with nginx
FROM nginx:1.22.1-alpine as production
ENV NODE_ENV production
COPY --from=builder /app/build /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/config.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
