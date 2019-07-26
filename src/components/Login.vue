<template>
  <div id="portal-template">
    <img class="portal-logo" src="../assets/images/logo.png" alt="秒杀logo">
  <div id="login">
    <el-form :model="user" label-width="80px" label-position="top" ref="userValid" :rules="rules">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
  </el-form-item>
  <el-form-item label="密码"  prop="password">
    <el-input v-model="user.password" placeholder="请输入密码" type="password" @keypress.enter.native="login('userValid')"></el-input><!--监听回车键-->
  </el-form-item>
    <el-button type="primary" class="submit-btn" @click="login('userValid')">登录</el-button>
  </el-form>
  </div>
</div>
</template>

<script>
import qs from 'qs';
export default {
  name: 'login',
  data () {
    return {
      user:{
        username:'',
        password:''
      },
      rules: {
        username: [{ required:true,message:'用户名不允许为空',trigger:'blur' }],
        password: [{ required:true,message:'密码不允许为空',trigger:'blur' }]
  }
}
  },
  methods: {
    login(refName){
      var self = this;
      this.$refs[refName].validate((valid)=>{
        if(valid){
          console.log('验证通过');
          self.axios.post('/api/login', qs.stringify({username:self.user.username,password:self.user.password}))
          .then((response)=>{
            if(response.data.code == 200){
              self.$message.success(response.data.message)
              self.$router.push('/foo')
            }else {
              self.$message.error(response.data.message);
            }
          }).catch((error)=>{
            self.$message.error('外星人呼的一下把我们服务器带走了，刷新一下说不定能抢回来~');
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/replace-elementui.css';
html {
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family :"PingFang SC","Helvetica Neue","Hiragino Sans GB","Segoe UI","Microsoft YaHei","微 软雅黑",sans-serif;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
a {
  text-decoration: none;
}
</style>
