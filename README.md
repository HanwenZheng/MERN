- sudo rm -r /opt/front-end
- sudo git clone https://github.com/HanwenZheng/MERN.git /opt/front-end
- cd /opt/front-end
- sudo nano package.json => delete "node-sass"
- sudo npm install
- sudo yarn add node-sass
- sudo nano /opt/front-end/webpack.config.js => replace with "/api"
- sudo npm run build
- sudo pm2 kill
- sudo pm2 start /opt/back-end/server.js
- sudo systemctl restart nginx