import Vue from 'vue'
import qs from 'qs'

export default {
  state: { //vuex中的数据源
    login: false,
    user: {
      username: '',
      password:''
    }
  },
  mutations: {
    login(state, payload){
      sessionStorage.setItem('username',payload.username);
      sessionStorage.setItem('login',true);
      state.login = true;
      state.user.username = payload.username;
    }
  },
  actions: {
    login(context, payload) {
      return new Promise((resolve, reject)=>{
        Vue.axios.post('/api/login',
        qs.stringify(payload))
        .then(function(response){
          if(response.data.code == 200){
          resolve(response)
          context.commit('login', payload);
        }else {
          reject(response)
        }
        })
        .catch(function(error){
          var errorData = {
            message: '外星人呼的一下把我们服务器带走了，刷新一下说不定能抢回来~'
          }
          error.data = errorData
          reject(error)
        })
      })
    }
  },
  getters: { //Getter相当于vue中的computed计算属性，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
    getLoginState(state){
      return state.login
    },
    getUsername(state){
      return state.user.username
    }
  }
}
