```
axiox.get(`地址`).then(
    response => {
        成功执行
    },
    error => {
        失败执行
    }
)
```

```
导库
import PubSub from 'pubsub-js'
消息订阅
this.token = PubSub.subscribe('订阅名称', (_, 接受值) => {
            
        })
消息发布
PubSub.publish(订阅名称，订阅值)
```

```
封装NavLink
/*需要添加class属性使用NavLink标签,activeClassName="添加的属性名",属性名为active可以以省略*/
/*标签体内容会存在children属性通过props传递*/
<NavLink className="list-group-item" {...this.props} />
```

		路由
		1.明确好界面中的导航区、展示区
		2.导航区的a标签改为Link标签
					<Link to="/xxxxx">Demo</Link>
		3.展示区写Route标签进行路径的匹配
					<Route path='/xxxx' component={Demo}/>
		4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>
		路由组件接收到三个固定的属性
											history:
														go: ƒ go(n) 前进n步
														goBack: ƒ goBack()	回退
														goForward: ƒ goForward()	前进
														push: ƒ push(path, state)	
														replace: ƒ replace(path, state)
											location:
														pathname: "/about"
														search: ""
														state: undefined
											match:
														params: {}
														path: "/about"
														url: "/about"
														
	路由匹配嵌套Switch提高匹配效率，匹配到后不再向下匹配
	多级路由页面刷新后css样式丢失解决
	1.public/index.html 中 引入样式时不写 ./ 写 / （常用）
				2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
				3.使用HashRouter
	添加exact={true}/exact默认为true，开启路由匹配的严格模式
	<Route exact={true} path="/about" component={About}/>
	重定向Redirect
						<Switch>
							<Route path="/about" component={About}/>
							<Route path="/home" component={Home}/>
							<Redirect to="/about"/>
						</Switch>
						路由匹配不到后规定跳转的路径
	路由传参
	
				1.params参数
							路由链接(携带参数)：<Link to='/demo/test/tom/18'}>详情</Link>
							注册路由(声明接收)：<Route path="/demo/test/:name/:age" component={Test}/>
							接收参数：this.props.match.params
				2.search参数
							路由链接(携带参数)：<Link to='/demo/test?name=tom&age=18'}>详情</Link>
							注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
							接收参数：this.props.location.search
							备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
				3.state参数
							路由链接(携带参数)：<Link to={{pathname:'/demo/test',state:											{name:'tom',age:18}}}>详情</Link>
							注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
							接收参数：this.props.location.state
							备注：刷新也可以保留住参数




```
注意
1.react18不能在package.json使用下面方法进行代理
"proxy":"http://localhost:5000" 

2.react18代理引用的使用
新版：const {createProxyMiddleware: proxy} = require('http-proxy-middleware')
旧版：const proxy = require('http-proxy-middleware')

3.querystring库已弃用换为qs
npm i qs

4.import 'antd/dist/antd.css' react18引入后会报错需要更换为import 'antd/dist/antd.min.css' 压缩后的css
```