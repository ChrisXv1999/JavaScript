####防火墙
+ 查看防火墙配置  sudo firewall-cmd --list-all
+ 添加一个端口 sudo firewall-cmd --zone=public --add-port=9999/tcp --permanent
+ 重启 sudo firewall-cmd --reload

####nginx配置
+ 下载压缩包 wget http://nginx.org/download/nginx-1.18.0.tar.gz
+ 解压 tar -zxvf nginx-1.18.0.tar.gz
+ 编译 make && make install
+ ./configure --prefix=/opt/ngnpm2/nginx
+ 查看 ps -ef | grep nginx 
+ 启动nginx  ./nginx -c /opt/ngnpm2/nginx/conf/nginx.conf  //失败可能是没有logs文件 手动创建
