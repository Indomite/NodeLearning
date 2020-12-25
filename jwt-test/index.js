const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const {
    sign
} = require('jsonwebtoken') //签发token
const {
    secret
} = require('./config')
const jwt = require('koa-jwt')({
    secret
}) //jwt加密解密码中间件
const admin = require('./middleware/admin')()

const app = new Koa()
app.use(bodyParser())
const router = new Router()
router.post('/api/login', async (ctx, next) => {
    // ctx.request.params URL请求参数
    // ctx.request.query 请求参数
    // ctx.request.header 头参数
    // ctx.request.body json对象参数

    const user = ctx.request.body;
    if (user && user.username) {
        let {
            username
        } = user
        const token = sign({
            username
        }, secret, {
            expiresIn: 6000
        })
        ctx.body = {
            message: "得到了Token",
            code: 1,
            token
        }
    } else {
        ctx.body = {
            message: "参数错误",
            code: -1
        }
    }
})

router.get('/api/userInfo', jwt, async ctx => {
    ctx.body = {
        message: 'Token 鉴权',
        username: ctx.state.user.username
    }
})

router.get('/api/adminInfo', jwt, admin, async ctx => {
    ctx.body = {
        message: 'Hello Admin',
        username: ctx.state.user.username
    }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log('app listen 3000');
})