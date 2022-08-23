1.react18不能在package.json使用下面方法进行代理
"proxy":"http://localhost:5000" 

2.react18代理引用的使用
新版：const {createProxyMiddleware: proxy} = require('http-proxy-middleware')
旧版：const proxy = require('http-proxy-middleware')

3.querystring库已弃用换为qs
npm i qs

4.import 'antd/dist/antd.css' react18引入后会报错需要更换为import 'antd/dist/antd.min.css' 压缩后的css