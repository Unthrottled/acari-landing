FROM mongo:latest

ADD mongod.conf /etc/

RUN mkdir -p /etc/ssl
ADD mongodb.pem /etc/ssl/


ENTRYPOINT ["mongod", "--config", "/etc/mongod.conf"]