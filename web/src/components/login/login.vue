<template>
  <div class="backlogin">
    <div class="login_box">
      <div class="title">后台登录</div>
      <div>
        <input class="myinput" type="text" placeholder="手机号/用户名" v-model="username" />
      </div>
      <div>
        <input @keyup.13="login" class="myinput" type="password" placeholder="口令" v-model="password" />
      </div>
      <div class="login_other">
        <a href="javascript:;" @click="$router.push('/')">找回密码</a>
        <input type="checkbox" id="remenberme" /><label for="remenberme">记住我</label>
      </div>
      <button :disabled="disablebtn" class="login" @click="login">{{loginText}}</button>
    </div>

  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'backlogin',
    data () {
      return {
        username:"admin",/*TODO:先预存测试值，以免手动输入*/
        password:"123456",
        disablebtn: false,
        loginText:"登录"
      }
    },
    methods:{
      ...mapActions({
        setDictValue: 'setDictValue',
      }),
      login(){
        let _this = this;
        this.disablebtn = true;
        this.loginText = "登录中...";

        //this.$reqs就访问到了main.js中绑定的axios
        this.$reqs.post("/users/login", {
          username: this.username,
          password: this.password
        }).then(function(result){
          //成功
          if(result.data.success)
              _this.$router.push({path:'/backIndex/indexContent'});
          else
              alert(result.data.err);

          _this.disablebtn = false;
          _this.loginText = "登录";

        }).catch(function (error) {
          //失败
          _this.disablebtn = false;
          _this.loginText = "登录"
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import './login';
</style>
