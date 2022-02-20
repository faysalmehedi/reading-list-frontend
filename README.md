# reading-list-frontend

The backend code have written in Flask, find out [here](https://github.com/faayam/reading-list-backend.git)

### App running instructions:

```bash
sudo apt update
sudo apt install docker.io
git clone https://github.com/faayam/reading-list-frontend.git
cd reading-list-frontend
docker build . -t reading-list-frontend
docker run -p 80:80 -d -e API_HOST=<api_address> -e API_PORT=<api_port> reading-list-frontend
```