# reading-list-frontend

The backend code have written in Flask, find out [here](https://github.com/faayam/reading-list-backend.git)

### App running instructions:

```console
$ sudo apt update
$ sudo apt install docker.io
$ sudo apt install docker-compose
$ git clone https://github.com/faayam/reading-list-frontend.git
$ cd reading-list-frontend
$ echo "REACT_APP_BACKEND=http://localhost:5000" > .env
$ sudo docker-compose up -d
```