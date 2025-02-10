export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"NINEBABY\",\"description\":\"My first VuePress Site\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/logo.svg\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/css/index.css\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
