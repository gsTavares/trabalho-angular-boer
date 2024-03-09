FROM node:18-slim AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine
COPY --from=build /app/dist/trabalho-angular-boer/browser /usr/share/nginx/html
EXPOSE 80

FROM node:14 AS server
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY --from=build /app/dist/trabalho-angular-boer/browser /app/public
EXPOSE 3000

FROM node:14 AS production
WORKDIR /app
COPY --from=server /app .
CMD ["node", "server.js"]