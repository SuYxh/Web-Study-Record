module.exports = {
    devServer:{
        proxy:{
            "/api/origin":{
                target:"https://res.huat.xyz/json/todos.json",
                changeOrigin:true,
                // ws:true,
                pathRewrite:{
                    "^/api/origin": ''
                }
            }
        }
    }
}