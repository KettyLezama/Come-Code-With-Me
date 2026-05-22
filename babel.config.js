module.exports = function(api) {
  const isTest = api.env('test')

  return {
    presets: [
      [
        require('@babel/preset-env').default,
        isTest
          ? { targets: { node: 'current' } }
          : { useBuiltIns: 'entry', corejs: 3, modules: false }
      ],
      [
        require('@babel/preset-react').default,
        { runtime: 'automatic' }
      ]
    ],
    plugins: [
      require('@babel/plugin-transform-class-properties').default,
      [
        require('@babel/plugin-transform-runtime').default,
        { helpers: true, regenerator: true }
      ]
    ]
  }
}
