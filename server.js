// 1.引入express
const express = require('express')

// 2.创建应用对象
const app = express()

// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

// GET请求
app.get('/server', (request, response) => {
  // 设置响应头 -- 设置运行跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 设置响应体
  response.send('HELLO,AJAX-GET')
})
// POST请求
app.post('/server', (request, response) => {
  // 设置响应头 -- 设置运行跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  // 设置响应体
  response.send('HELLO,AJAX-POST-')
})

// JSON响应
app.all('/json-server', (request, response) => {
  // 设置响应头 -- 设置运行跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  // 响应一个数据
  const data = {
    name: 'zhishouh'
  }
  // 对对象进行字符串转换
  let str = JSON.stringify(data)
  // 设置响应体
  response.send(str)
})

// 针对IE缓存
app.get('/ie', (request, response) => {
  // 设置响应头 -- 设置运行跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 设置响应体
  response.send('HELLO,AJAX-IE-4')
})

// 延时响应 
app.get('/delay', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  setTimeout(() => {
    response.send('延时响应')
  }, 3000)
})

// jQuery服务
app.all('/jquery-server', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  const data = { name: 'zhishouh' }
  setTimeout(() => {
    response.send(JSON.stringify(data))
  }, 3000);
})

// axios服务
app.all('/axios-server', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  const data = { name: 'zhishouh' }
  response.send(JSON.stringify(data))
})

// fetch服务
app.all('/fetch-server', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  const data = { name: 'zhishouh' }
  response.send(JSON.stringify(data))
})
// 4.监听端口启动服务
app.listen(8000, () => {
  console.log("服务已启动，8000端口监听中...")
})