module.exports = {
  title: 'Macross',
  description: 'Just playing around',
  themeConfig: {
    navbar: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        children: [
          { text: 'CSS', link: '/frontend/css/' },
          { text: 'JavaScript', link: '/frontend/javascript/' },
          { text: 'Vue', link: '/frontend/vue/' },
        ],
      },
      { text: '面试', link: '/interview/' },
      { text: '关于', link: '/about/' },
    ],
    sidebar: {
      '/frontend/javascript/': [
        {
          text: 'JavaScript',
          children: ['javascript'],
        },
      ],
      '/frontend/css/': [
        {
          text: 'css',
          children: ['css'],
        },
      ],
      '/frontend/vue/': [
        {
          text: 'vue',
          children: ['vue'],
        },
      ],
      '/frontend/react/': [
        {
          text: 'react',
          children: ['react'],
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          children: ['/reference/cli.md', '/reference/config.md'],
        },
      ],
    },
  },
};
