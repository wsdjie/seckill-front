<template>
  <portal-template>
  <div id="register">
    <el-form :model="user" label-width="80px" label-position="top" ref="ruleForm" :rules="rules">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
  </el-form-item>
  <el-form-item label="密码"  prop="password">
    <el-input v-model="user.password" placeholder="请输入密码" type="password"></el-input>
  </el-form-item>
  <el-form-item label="确认密码"  prop="repassword">
    <el-input v-model="user.repassword" placeholder="请确认密码" type="password"></el-input>
  </el-form-item>
    <el-button type="primary" class="submit-btn" @click="reg('ruleForm')">注册</el-button>
  </el-form>
  <router-link to="/login"><el-button type="text" icon="el-icon-edit">去登录页</el-button></router-link>
  </div>
</portal-template>
</template>

<script>
import qs from 'qs';
import PortalTemplate from './PortalTemplate';
import md5 from 'js-md5';
export default {
  name: 'register',
  components: {
    PortalTemplate
  },
  data () {
    return {
      user:{
        username:'',
        password:'',
        repassword:''
      },
      rules: {
        username: [{ required:true,message:'请输入用户名',trigger:'blur' }],
        password: [{ required:true,message:'请输入密码',trigger:'blur' }],
        repassword:[{required:true,message:'请确认密码',trigger:'blur'},
        {
          validator:(rule,value,callback)=> {
            if(value === ''){
              callback(new Error('请再次输入密码'));
            }else if(value !== this.user.password){
              callback(new Error('密码输入不一致'));
            }else {
              callback();
            }
          }, trigger: 'blur' }]
        }
  }
  },
  methods: {
    CalcuMD5(pwd) {
  pwd = pwd.toUpperCase();
  pwd = md5(pwd);
  return pwd;
},
    reg(refName){
      var self = this;
      this.$refs[refName].validate((valid)=>{
        if(valid){
          var mdpassword = self.CalcuMD5(this.user.password+'djspringboot');
          console.log(mdpassword);
          self.axios.post('/api/register', qs.stringify({
            username: this.user.username,
            password: mdpassword,
          }))
          .then(function (response) {
            self.$router.push('/login')
            self.$message.success(response.data.message)
          })
          .catch(function (error) {
            self.$message.error(response.data.message)
          });
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
