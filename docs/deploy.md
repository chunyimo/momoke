## 环境构建命令
> 第一步：构建一个docker 网络环境，将多个container放入这个网络，让彼此可以看见
```shell
sudo docker network create --driver bridge pgnetwork
```
> 第二步：启动pgadmin4, 配置共用的网络，以及配置一个hostname
```
sudo  docker run -p 5050:5050 \
-e "PGADMIN_DEFAULT_EMAIL=admin@admin.com" \
-e "PGADMIN_LISTEN_PORT=5050" \
-e "PGADMIN_DEFAULT_PASSWORD=admin" \
--hostname="pgadmin4" \
--network="pgnetwork" \
--name="pg42" -d dpage/pgadmin4
```

> 第三步：启动postgres，配置共用的网络，以及配置一个hostname
```
sudo docker run -p 5432:5432 \
-e POSTGRES_PASSWORD='psql' \
--name="postgres" \
--hostname="postgres" \
--network="pgnetwork" \
postgres
```
## 相关docker命令
> 
```shell
sudo docker exec -it container_id psql -U user_name
```
