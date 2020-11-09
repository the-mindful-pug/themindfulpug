# Production evn
FROM nginx:1.17.9-alpine
COPY nginx.conf /etc/nginx/nginx.conf

# Create log dirs for app engine
RUN mkdir -p /var/log/app_engine
RUN mkdir -p /usr/share/nginx/www/_ah && echo "healthy" > /usr/share/nginx/www/_ah/health
# Static assets
ADD build/ /usr/share/nginx/www/
RUN chmod -R a+r /usr/share/nginx/www
