import { App, MetaResps } from './mod.ts'

// deno-lint-ignore require-await
const ob = new App(async (_action) => {
    const resp: MetaResps = {
        status: "ok",
        retcode: 0,
        data: [],
        message: ''
    }
    return resp
}, () => { })

ob.start({
    basic: {
        onebot_version: '12',
        impl: 'test'
    },
    ws: [{
        host: '127.0.0.1',
        port: 9322,
        send_msgpack: false
    }]
})