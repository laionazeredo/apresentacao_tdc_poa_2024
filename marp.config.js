module.exports = {
  inputDir: '.',
  engine: ({ marp }) => marp.use(require('@kazumatu981/markdown-it-kroki'), {
      entrypoint: "https://kroki.io",
  })
}
