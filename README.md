<pre><code>sudo rm -r /opt/front-end</code></pre>
<pre><code>sudo git clone https://github.com/HanwenZheng/MERN.git /opt/front-end</code></pre>
<pre><code>cd /opt/front-end && sudo yarn install</code></pre>
<pre><code>sudo npm run build</code></pre>
<pre><code>sudo pm2 kill</code></pre>
<pre><code>sudo pm2 start /opt/back-end/server.js</code></pre>
<pre><code>sudo systemctl restart nginx</code></pre>