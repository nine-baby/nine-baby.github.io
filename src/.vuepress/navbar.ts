import { navbar } from "vuepress-theme-hope";
//图标库采用 https://www.npmjs.com/package/@iconify-json/fa6-solid
export default navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "square-poll-horizontal",
    prefix: "/posts/",
    children: [
      {
        text: "案例",
        // icon: "pen-to-square",
        prefix: "demo/",
        children: [
          { text: "demo1", icon: "fan", link: "1" },
        ],
      },
      { text: "常用工具站", icon: "wrench", link: "online-tools" },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
