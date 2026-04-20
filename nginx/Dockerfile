FROM openresty/openresty:alpine
RUN mkdir -p /var/log/nginx/honeypot && touch /var/log/nginx/honeypot/blocked_ips.log
RUN chmod -R 777 /var/log/nginx/honeypot
COPY nginx.conf /usr/local/openresty/nginx/conf/nginx.conf