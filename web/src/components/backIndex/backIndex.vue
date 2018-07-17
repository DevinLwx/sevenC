<template>
  <div class="backlogin">
    <div class="header">
      <div class="search_box" :class="{search_box_fouce:search_box_fouce}">
        <i class="icon-search"></i>
        <input @focus="focusFn" @blur="blurFn" type="text" name="" id="" value="" placeholder="搜索 . . . "/>
      </div>
      <div class="handler" @click="toggleSlide">
        <div class="more">
          <ul :class="{showul:showExit}">
            <li><a href="javascript:;" @click="logout"><i class="icon-signout"></i>退出</a></li>
            <li><a href="javascript:;" @click="">修改密码</a></li>
            <li><a href="javascript:;">意见反馈</a></li>
          </ul>
        </div>
        <img src="../../assets/images/teacherimg01.png" alt=""/>
      </div>
    </div>

    <!--侧面导航-->
    <div class="sidenav_box">
      <img class="logo" src="../../assets/images/logo03.png" alt=""/>
      <ul class="sidenav">
        <li class="now">
          <router-link to="/backIndex/indexContent">
            <i class="icon-home"></i>
            <span>网站首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/backIndex/adminList">
            <i class="icon-user"></i>
            <span>后台人员</span>
          </router-link>
        </li>
        <li>
          <router-link to="/backIndex/studentList">
            <i class=" icon-user-md"></i>
            <span>学员管理</span>
          </router-link>
        </li>
        <li>
          <router-link to="/backIndex/courseList">
            <i class="icon-book"></i>
            <span>课程管理</span>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="content">

      <ul class="breadcrumb">
        <li><a href="#/backIndex/">首页</a></li>
        <li>{{pageTitle}}</li>
      </ul>
      <router-view></router-view>

    </div>

  </div>
</template>

<script>
  var pageTitleObj = {
    indexContent: "网站首页",
    adminList: "后台人员",
    studentList: "学员管理",
    courseList: "课程管理",
    courseEdit: "课程编辑"
  };

  export default {
    name: 'backlogin',
    data () {
      return {
        search_box_fouce: false,
        showExit: false,
        pageTitle: pageTitleObj[this.$route.path.substr(this.$route.path.lastIndexOf("/") + 1)] || "网站首页"
      }
    },
    methods: {
      focusFn(){  //搜索框获取焦点，添加class
        this.search_box_fouce = true;
      },
      blurFn(){   //搜索框失去焦点，去掉class
        this.search_box_fouce = false;
      },
      toggleSlide(){ //这个是用来显示和隐藏头像旁的退出下拉框
        this.showExit = !this.showExit
      },
      logout(){ //退出系统
        var _this = this;

        this.$reqs.post("/users/logout", {}).then(function (result) {
          //成功
          _this.$router.push({path: '/login'});
        }).catch(function (error) {
          //失败
          console.log(error)
        });
      },
      getUserInfo(){
        console.log(11)
        var _this = this;

        this.$reqs.get("/users/getInfo", {}).then(function (result) {
          console.log(result)
        }).catch(function (error) {
          //失败
          console.log(error)
        });
      }
    },
    watch: { //监控路径变化  当路径发送变化的时候，改变面包屑导航的显示
      $route: {
        handler: function (val, oldVal) {
          var path = val.path;
          this.pageTitle = pageTitleObj[path.substr(path.lastIndexOf("/") + 1)] || "网站首页";
        }
      }
    },
    created: function () {
      this.getUserInfo();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import './backIndex';
</style>
