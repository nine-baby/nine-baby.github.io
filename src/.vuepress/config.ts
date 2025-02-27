import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "NINEBABY",
  description: "NINEBABY BLOG",
  theme,
  head: [
    [
      'link', {rel:'icon', href:'/images/logo.svg'}
    ],
    [
      'link', {rel:'stylesheet', href:'/assets/css/index.css'}
    ]
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
