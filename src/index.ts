import http from 'node:http'
import Koa from 'koa'
import logger from 'koa-logger'
import { koaBody } from 'koa-body'
import Router from '@koa/router'

const posts: string[] = []
const sleep = (time: number): Promise<unknown> => new Promise(resolve => setTimeout(resolve, time))

const router = new Router()
const app = new Koa()

app.use(logger())
app.use(koaBody())

router.get('/', root)

router
  .get('/posts', list)
  .post('/post', create)
  .get('/post/:id', show)

router.get('/sync', sync)
router.get('/async', async)

app.use(router.routes())

function sync(ctx: Koa.Context): void {
  ctx.body = 'sync: true'
}

async function async(ctx: Koa.Context): Promise<void> {
  ctx.body = 'async: true'
}

/**
 * Root
 */

async function root(ctx: Koa.Context): Promise<void> {
  // eslint-disable-next-line no-console
  console.log('Before redirect')
  await sleep(2000)
  await ctx.redirect('/posts')
  // eslint-disable-next-line no-console
  console.log('After redirect')
}

/**
 * Post listing.
 */

async function list(ctx: Koa.Context): Promise<void> {
  ctx.body = { posts }
}

/**
 * Show post :id.
 */

async function show(ctx: Koa.Context): Promise<void> {
  const id = ctx.params.id
  const post = posts[id === 0 ? 0 : id - 1]
  if (!post)
    ctx.throw(404, 'invalid post id')
  ctx.body = { post }
}

/**
 * Create a post.
 */

async function create(ctx: Koa.Context): Promise<void> {
  const post = ctx.request.body
  const id = posts.push(post) - 1
  post.created_at = new Date()
  post.id = id
  ctx.redirect('/posts')
}

app.on('error', (err) => {
  console.error('server error', err)
})

if (import.meta.url) {
  http.createServer(app.callback()).listen(3000)
  // eslint-disable-next-line no-console
  console.log('> Server is running on port http://127.0.0.1:3000')
}

export default app
