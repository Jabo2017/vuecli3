let config = {
  appName: "xxx",
  isDev: true
};

if (location.hostname == "192.168.102.140") {
  // 模拟线上环境
  Object.assign(config, {
    // js 浅拷贝、对象属性的合并
    appName: "Online",
    isDev: false
  });
}

export default config;
