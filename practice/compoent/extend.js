import Vue from 'vue'

const compoent = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
    <div>
      <input type="text" v-model="text">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
      <span>{{propOne}}</span>
    </div>
  `,
  methods: {
    handleChange () {
      // this.onChange()
      this.$emit('change')
    }
  },
  mounted () {
    console.log('comp mounted')
  },
  data () {
    return {
      text: '1'
    }
  }
}

const compoent2 = {
  extends: compoent,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    console.log(this.$parent.$options.name)
    console.log('comp2 mounted')
  }
}

new Vue({
  name: 'balabala',
  el: '#root',
  components: {
    Comp: compoent2
  },
  template: `<comp></comp>`
})

// const CompVue = Vue.extend(compoent)

// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'aaa'
//   },
//   data: {
//     text: 'sdf'
//   },
//   mounted () {
//     console.log('instance mounted')
//   }
// })
