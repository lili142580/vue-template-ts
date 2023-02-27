import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { viteMockServe } from "vite-plugin-mock"
// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [
        vue(),
        Components({
            dts: true,
            dirs: ["src/components"], // 按需加载的文件夹
        }),
        AutoImport({
            imports: ["vue", "vue-router", "vuex"],
        }),
        viteMockServe({
            localEnabled: true,  //配置是否打开mock
            supportTs: false, //打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
            logger: false, //是否在控制台显示请求日志
            mockPath: "./src/mock"
        })
    ],
    resolve: {
        alias: {
            "@src": resolve(__dirname, "./src"),
        },
    },
    server: {
        host: "0.0.0.0", //地址
        port: 8080, //端口
        https: false, //是否开启https
        open: true, // 启动后是否自动打开浏览器,
        cors: true, //是否允许跨域
    },
    build: {
        // 设置最终构建的浏览器兼容目标
        target: "es2015",
        // 构建后是否生成 source map 文件
        sourcemap: false,
        //  chunk 大小警告的限制（以 kbs 为单位）
        chunkSizeWarningLimit: 2000,
        // 启用/禁用 gzip 压缩大小报告
        reportCompressedSize: false,
    },
});
