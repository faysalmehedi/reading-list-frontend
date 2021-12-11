# reading-list-frontend

### App running instructions:

```console
$ sudo apt update
$ sudo apt install docker.io
$ sudo apt install docker-compose
$ git clone https://github.com/faayam/reading-list-frontend.git
$ cd reading-list-frontend
$ echo "REACT_APP_BACKEND_URL=http://192.168.0.117:5000" > .env
$ sudo docker-compose up -d
```