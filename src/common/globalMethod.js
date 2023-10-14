
const getCurrentDateTime = function () {
    return String().concat(
        new Date().getFullYear() + '-',
        (new Date().getMonth() + 1).toString().padStart(2, '0') + '-',
        new Date().getDate().toString().padStart(2, '0') + 'T',
        new Date().getHours().toString().padStart(2, '0') + ':',
        new Date().getMinutes().toString().padStart(2, '0') + ':',
        new Date().getSeconds().toString().padStart(2, '0'),
    );
}

export default {
    install(Vue) {
        Vue.config.globalProperties.$getCurrentDateTime = getCurrentDateTime();
    }
}