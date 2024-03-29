import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-74bc627b","/about/","",["/about/index.html","/about/README.md"]],
  ["v-71b3ae87","/interview/","",["/interview/index.html","/interview/README.md"]],
  ["v-8192948e","/latestarticle/","",["/latestarticle/index.html","/latestarticle/README.md"]],
  ["v-38c033e0","/frontend/css/","",["/frontend/css/index.html","/frontend/css/README.md"]],
  ["v-72d11f44","/frontend/javascript/","",["/frontend/javascript/index.html","/frontend/javascript/README.md"]],
  ["v-38aee226","/frontend/vue/","",["/frontend/vue/index.html","/frontend/vue/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
