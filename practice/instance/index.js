import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div ref="div">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  }
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText} : ${oldText}`)
  //   }
  // }
})

// app.$mount('#root')
let i = 0

setInterval(() => {
  i++
  // app.text += 1
  // app.obj.a = i
  // app.$forceUpdate()

  app.$set(app.obj, 'a', i)
  // app.$delete()
  // app.$options.data += 1 //这种方式不能修改
  // app.$data.text += 1 //通过这种方式可以修改
}, 1000)

// console.log(app.$data)//
// console.log(app.$props)//当前实例中的props
// console.log(app.$el)//HTML中相应节点
// console.log(app.$options)//new出来的Vue实例整个对象{},其本来有默认值，将默认值与我们定义的内容融合为最终的options,直接在$options上更改属性是不起作用的,可以通过$data获得对属性的更改
// app.$options.render = (h) => { //只有值变化的时候会调用
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root === app) //它是一个Vue的实例
// console.log(app.$children) //组件的子节点(组件)
// console.log(app.$slots) //vue插槽
// console.log(app.$scopedSlots) //vue插槽
// console.log(app.$refs) //操作template中的对象
// console.log(app.$isServer) //服务端渲染的时候需要
// watch:侦听属性，返回的是一个销毁当前watch的一个方法
// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText} : ${oldText}`)
// })
// setTimeout(() => {
//   unWatch()
// }, 3000)
// 事件监听
// app.$on('test', (a, b) => {
//   console.log(`test emited ${a} ${b}`)
// })
// app.$emit('test', 'ldl', 'lbl')
// 单次事件监听// app.$once

// 强制对象渲染一次
// app.$forceUpdate()

// Vue是异步渲染的
