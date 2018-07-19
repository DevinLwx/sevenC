import Login from '@/components/login/login'
import Home from '@/components/home/home'
import CourseList from '@/components/home/components/courseList'
import IndexContent from '@/components/home/components/indexContent'
import AdminList from '@/components/home/components/adminList'
import StudentList from '@/components/home/components/studentList'
import CourseEdit from '@/components/home/components/courseEdit'

let routes = [
  {
    path: '/',
    redirect: 'Login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/home',
    name: 'Home',
    component: Home,
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

export default routes;
