const base = {
    get() {
        return {
            url : "http://localhost:8080/django419nx25c/",
            name: "django419nx25c",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Django的二手电子设备交易平台设计与开发"
        } 
    }
}
export default base
