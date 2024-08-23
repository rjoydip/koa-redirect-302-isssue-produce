# koa-redirect-and-benchmark

[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

About Produce redirect and benchmark

## Endpoints

Endpoints are divided in three parts.

### Redirect

- / - GET - Root getting redirected to /posts

### Posts

- /posts - GET - Get all posts
- /post/:id - GET - Show a post
- /post/:id - POST - Create a post

### Benchmark

- /sync - GET - Snyc route
- /async - GET - Async route

## Setup

To clone:

```sh
git clone https://github.com/rjoydip/oss-issue-solving/git
cd oss-issue-solving/hono/3271
```

To install dependencies:

```sh
bun install
```

To run:

```sh
bun start
```

Server will running on port [http://127.0.0.1:3000](http://127.0.0.1:3000)

To test:

```sh
bun test
```

To benchmark

```sh
bun bench
```

## License

[MIT](./LICENSE) License © 2024-PRESENT [Joydip Roy](https://github.com/rjoydip)

<!-- Badges -->

[license-src]: https://img.shields.io/github/license/rjoydip/koa-redirect-and-benchmark.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/rjoydip/koa-redirect-and-benchmark/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/koa-redirect-and-benchmark
