import { SITE_URL, SITE_ASSETS_URL } from '../constants'

function getMetaInfo (vm) {
  const { metaInfo } = vm.$options
  if (metaInfo) {
    return typeof metaInfo === 'function'
      ? metaInfo.call(vm)
      : metaInfo
  }
}

const serverMetaInfoMixin = {
  created () {
    const metaInfo = getMetaInfo(this)
    if (metaInfo) {
      const title = metaInfo.title
      const description = metaInfo.description
      const metaUrl = metaInfo.metaUrl
      const metaImage = metaInfo.metaImage
      if (title) {
        this.$ssrContext.title = `Readr | ${title}`
      }
      if (description) {
        this.$ssrContext.description = description
      }
      if (metaUrl) {
        this.$ssrContext.metaUrl = SITE_URL + metaUrl
      }
      if (metaImage) {
        this.$ssrContext.metaImage = SITE_ASSETS_URL + metaImage
      }
    }
  }
}

const clientMetaInfoMixin = {
  mounted () {
    const metaInfo = getMetaInfo(this)
    if (metaInfo) {
      const title = metaInfo.title
      const description = metaInfo.description
      const metaUrl = metaInfo.metaUrl
      const metaImage = metaInfo.metaImage
      if (title) {
        document.title = `Readr | ${title}`
        document.head.querySelector(`meta[property='og:title']`).content = `Readr | ${title}`
      }
      if (description) {
        document.head.querySelector(`meta[name=description]`).content = description
        document.head.querySelector(`meta[property='og:description']`).content = description
      }
      if (metaUrl) {
        document.head.querySelector(`meta[property='og:url']`).content = metaUrl
      }
      if (metaImage) {
        document.head.querySelector(`meta[property='og:image']`).content = metaImage
      }
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverMetaInfoMixin
  : clientMetaInfoMixin