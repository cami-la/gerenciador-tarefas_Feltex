FROM node:14 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --production

FROM nginx:1.21
COPY --from=node /app/dist/gerenciador-tarefas /usr/share/nginx/html

EXPOSE 80
