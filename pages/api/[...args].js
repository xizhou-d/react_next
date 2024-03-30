import { createProxyMiddleware } from 'http-proxy-middleware'

const cookieName = 'token'
const maxAge = 24 * 60 * 60

export default createProxyMiddleware({
    target: 'http://yuanjin.tech:5100',
    changeOrigin: true,
    onProxyRes(proxyRes, req, res) {
        const token = proxyRes.headers['authorization']

        if (token) {
            delete proxyRes.headers['authorization']
            proxyRes.headers['set-cookie'] = `${cookieName}=${token}; Max-Age=${maxAge}; path=/`
        }
    },
    onProxyReq(proxyReq, req, res) {
        const token = req.cookies[cookieName]

        if (token) {
            proxyReq.setHeader('Authorization', token)
        }
    }
})

export const config = {
    api: {
      bodyParser: false,
    },
}