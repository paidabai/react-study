1.react18不能在package.json使用下面方法进行代理
"proxy":"http://localhost:5000" 

2.新版react代理引用的使用
新版：const {createProxyMiddleware: proxy} = require('http-proxy-middleware')
旧版：const proxy = require('http-proxy-middleware')

3.querystring库已弃用换为qs
npm i qs