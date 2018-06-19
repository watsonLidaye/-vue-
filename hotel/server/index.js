// node 后端服务器

// const userApi = require('./api/userApi');
// const gets = require('./api/getApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');　
	next();　
});
// 后端api路由
// app.use('/api/user', userApi);
// app.use('/api/index', gets);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');