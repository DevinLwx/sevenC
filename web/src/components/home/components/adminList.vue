<template>
  <div class="adminList main">
    <div class="input_box">
      <input v-model="Admin.name" class="myinput" type="text" placeholder="用户名" />
      <input v-model="Admin.phone" class="myinput" type="text" placeholder="手机号" />
      <input v-if="!editAdminObj" v-model="Admin.password" class="myinput" type="password" placeholder="密码" />
      <button v-if="!editAdminObj" class="btn" @click="addAdmin()"><i class="fa fa-plus" aria-hidden="true"></i>添加</button>
      <button v-if="editAdminObj" class="btn" @click="saveEditAdmin()"><i class="fa fa-save" aria-hidden="true"></i>保存</button>
      <button style="opacity: 0.8;" v-if="editAdminObj" class="btn" @click="cancelEditAdmin()"><i class="fa fa fa-times-circle-o" aria-hidden="true"></i>取消</button>
    </div>
    <grid
      :listData="listData"
      :theadData="theadData"
      :ifEdit="true"
      :ifDelete="true"
      :ifpage="true"
      :pageInfo="pageInfo"
      @on-delete="deleteAdmin"
      @on-edit="editAdmin"
      @on-gopage="gopage"
    ></grid>
  </div>
</template>

<script>
  var theadData = [
    {
      title:"用户名",
      keyname:"name"
    },{
      title:"手机号",
      keyname:"phone"
    }
  ];
  import grid from '../../grid.vue'
  import { getAdminList, addUser, updateUser, deleteUser } from '../../../api/home';

  export default {
    name: 'adminList',
    data () {
      return {
        listData:[],
        theadData:theadData,
        Admin:{ //用户信息
          name:"",
          phone:"",
          password:"",
        },
        editAdminObj:null,  //用于存放正在编辑的用户
        pageInfo:{},
        page: 1,
        rows: 10
      }
    },
    mounted:function(){
      this.getAdminList(1);
    },
    methods:{
      getAdminList(page){
        let _this = this;

        getAdminList({
          page:page,
          rows: this.rows
        }).then(function(result){
          //成功
          _this.listData = result.data.data;
          _this.pageInfo.allpage = Math.ceil( result.data.total/_this.rows );
        }).catch(function (error) {
          //失败
          console.log(error)
        });
      },
      addAdmin(){ //添加用户
        if(!this.Admin.name || !this.Admin.phone || !this.Admin.password){
          alert("不能为空");
          return false;
        }
        addUser(this.Admin).then((result)=>{
            //成功
            this.getAdminList();
            this.emptyAdmin();
          }).catch(function (error) {
          //失败
          console.log(error)
        });

      },
      editAdmin(item){ //编辑用户
        this.editAdminObj = item;
        this.Admin = JSON.parse(JSON.stringify(item));
      },
      saveEditAdmin(){
        if(!this.Admin.name || !this.Admin.phone){
          alert("不能为空");
          return false;
        }

        updateUser(this.Admin).then((result)=>{
            //成功
            this.gopage(this.pageInfo.current);

            this.editAdminObj = null;
            this.emptyAdmin();
          }).catch(function (error) {
          //失败
          console.log(error)
        });
      },
      cancelEditAdmin(){
        this.editAdminObj = null;
        this.emptyAdmin();
      },
      emptyAdmin(){ //清空输入框（多次使用，所以封装到这里）
        this.Admin.name = "";
        this.Admin.phone = "";
        this.Admin.password = "";
      },
      deleteAdmin(item){
        let _this = this;
        this.$Modal.confirm({
          title: "请确认",
          content: "确定要删除么？",
          onOk: () => {
            deleteUser(item).then((result)=>{
                if(result.data.success) {
                  this.$Message.success("删除成功");
                  //成功
                  this.gopage(_this.pageInfo.current);
                  this.emptyAdmin();
                } else {
                  this.$Message.error("删除失败");
                }
              }).catch(function (error) {
              //失败
              console.log(error)
            });
          }
        });

      },
      gopage(index){
        this.pageInfo.current = index;
        //查询数据
        this.getAdminList(index)

      }
    },
    components:{grid}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    border-radius: 4px;
    background: #fff;
    margin-top: 10px;
  }


  .input_box{
    padding: 0 10px;
  }
  .input_box .myinput{
    width: 25%;
  }
</style>
