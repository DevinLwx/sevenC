import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import BackIndex from '@/components/backIndex/backIndex'
import CourseList from '@/components/backIndex/components/courseList'
import IndexContent from '@/components/backIndex/components/indexContent'
import AdminList from '@/components/backIndex/components/adminList'
import StudentList from '@/components/backIndex/components/studentList'
import CourseEdit from '@/components/backIndex/components/courseEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/backIndex',
      name: 'BackIndex',
      component: BackIndex,
      children:[
        {
          path: 'courseList', //课程列表
          component: CourseList
        },{
          path: 'courseEdit/:sysId', //编辑课程
          component: CourseEdit
        },{
          path: 'indexContent', //首页统计
          component: IndexContent
        },{
          path: 'adminList', //后台用户
          component: AdminList
        },{
          path: 'studentList', //学员用户
          component: StudentList
        },{
          path: '*',           //其他路径都跳转到首页
          redirect: 'IndexContent'
        }
      ]
    },
  ]
})
