# reading-list-frontend

The backend code have written in Flask, find out [here](https://github.com/faysalmehedi/reading-list-backend.git)

### App running instructions:

```bash
sudo apt update
sudo apt install docker.io

git clone https://github.com/faysalmehedi/reading-list-frontend.git
cd reading-list-frontend

sudo docker build . -t reading-list-frontend
sudo docker run -p 80:80 -d \
                    -e API_HOST=<api_address> \
                    -e API_PORT=<api_port> \
                    --name frontend reading-list-frontend
```
