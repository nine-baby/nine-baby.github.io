import { CodeTabs } from "E:/workspace/wumin/vuepress-blog/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.74_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_vzplyx33mvlxmdjqku3rmjgira/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "E:/workspace/wumin/vuepress-blog/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.74_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_vzplyx33mvlxmdjqku3rmjgira/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "E:/workspace/wumin/vuepress-blog/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.74_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_vzplyx33mvlxmdjqku3rmjgira/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
