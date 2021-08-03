export const themeData = {
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "前端",
      "children": [
        {
          "text": "CSS",
          "link": "/frontend/css/"
        },
        {
          "text": "JavaScript",
          "link": "/frontend/javascript/"
        },
        {
          "text": "Vue",
          "link": "/frontend/vue/"
        }
      ]
    },
    {
      "text": "面试",
      "link": "/interview/"
    },
    {
      "text": "关于",
      "link": "/about/"
    }
  ],
  "sidebar": {
    "/frontend/javascript/": [
      {
        "text": "JavaScript",
        "children": [
          "javascript"
        ]
      }
    ],
    "/frontend/css/": [
      {
        "text": "css",
        "children": [
          "css"
        ]
      }
    ],
    "/frontend/vue/": [
      {
        "text": "vue",
        "children": [
          "vue"
        ]
      }
    ],
    "/frontend/react/": [
      {
        "text": "react",
        "children": [
          "react"
        ]
      }
    ],
    "/reference/": [
      {
        "text": "Reference",
        "children": [
          "/reference/cli.md",
          "/reference/config.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
