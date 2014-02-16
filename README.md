nodeDemoApp
===========

Demo app with nodejs, locomotive, mongodb, bootstrap, highcharts and ember


Install: <br />
[NodeJS](http://nodejs.org/) <br />
[MongoDB](http://www.mongodb.org/)

Grunt install: (compiling js, handlebars) <br />
`npm install -g grunt-cli`

Bower Install: <br />
`npm install -g bower`

Run the following in the project folder: <br />
Run to install packages: 

```
npm install
bower install
```

Build js and handlebar templates: <br />
`grunt`

Start MongoDB: <br />
`mongod.exe -dbpath={dbpath}`

Start Locomotive Server: <br />
`lcm server`


Debugging Node: <br />
Get node inspector to use Chrome to debug <br />
https://github.com/node-inspector/node-inspector
<br />
Windows: <br />
1.) windows get name of node process

'tasklist /FI "IMAGENAME eq node.exe"'

<br />
2.) start debugging for the process <br />
'node -e "process._debugProcess(11764)"

<br />
3.) start inspector
'node-inspector &''

<br />
4.) open url http://127.0.0.1:8080/debug?port=5858
