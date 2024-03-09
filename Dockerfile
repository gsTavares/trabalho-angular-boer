FROM node:18-slim AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine
COPY --from=build /app/dist/project-name/browser /usr/share/nginx/html
EXPOSE 80