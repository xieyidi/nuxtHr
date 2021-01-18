import axios from 'axios'
export const request = axios.create({
    baseUrl:'http://toconfig.com'
})
export default ({store})=>{
    request.interceptors.request.use(function(config){
        const {user} = store.state
        if(user && user.token){
            config.headers.Authorization = `Token ${user.token}`
        }
        return config
    },function(error){
        Promise.reject(error)
    })
}