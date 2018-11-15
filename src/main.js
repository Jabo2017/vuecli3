import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import ElemnentUI from "element-ui";
import "./element-variables.scss";
import config from "../config";

Vue.use(ElemnentUI);

let bindToGlobal = (obj, key = "var") => {
  if (typeof window[key] === "undefined") {
    window[key] = {};
  }

  for (let i in obj) {
    window[key][i] = obj[i];
  }
};

new Vue({
  router,
  store,
  created() {
    bindToGlobal(config, "config");
    let that = this;
    let loading;
    // 添加请求拦截器
    axios.interceptors.request.use(
      function(config) {
        // 在发送请求之前做什么
        if (config.loading !== false) {
          loading = that.$loading({
            fullscreen: true,
            background: "rgba(255,255,255,0.25)"
          });
        }
        return config;
      },
      function(error) {
        // 请求错误做什么
        loading && loading.close();
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器
    axios.interceptors.response.use(function(response) {
      let resConfig = response.config;
      // 对响应数据做点什么
      if (resConfig) {
        that.$message({
          showClose: true,
          message: resConfig,
          type: "success"
        });
      }
      loading && loading.close();
    });
  },
  render: h => h(App)
}).$mount("#app");
