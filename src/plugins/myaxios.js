import axios from 'axios';

const MyAxios = {};
MyAxios.install = function(Vue) {
    Vue.prototype.$http = axios;
    // 全局设置axios的baseUrl
    // axios.defaults.baseUrl = 'http://localhost:3000'

    const instance = axios.create({
        baseURL: 'http://localhost:3000'
    });

    Vue.prototype.$http = instance;
};

export default MyAxios;