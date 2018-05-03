import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    props: true,
    // path: '/app',
    // props: (route) => ({ id: route.query.lbl }),
    components: {
      default: Todo,
      a: Login
    },
    name: 'appn',
    meta: {
      title: 'this if app',
      description: 'aaa'
    },
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    components: {
      default: Login,
      a: Todo
    }
  }
]
