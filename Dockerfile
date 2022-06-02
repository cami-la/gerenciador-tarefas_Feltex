FROM node:14 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --production

FROM nginx:1.21
COPY --from=node /app/dist/gerenciador-tarefas /usr/share/nginx/html

EXPOSE 80

#docker build -t <usarname>/gerenciador-tarefas:v1 .
#docker push <usarname>/gerenciador-tarefas:v1
#docker login -u <usarname> -p <password> docker.io
#docker push <usarname>/gerenciador-tarefas:v1
#docker run -d --name gerenciador-tarefas -p 8099:80 <usarname>/gerenciador-tarefas:v1
#docker ps
