import Vue from 'vue'

const compoent = {
  props: {
    active: Boolean,
    propOne: String
    // onChange: Function
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
  data () {
    return {
      text: '1'
    }
  }
}

// Vue.component('CompOne', compoent)

new Vue({
  components: {
    CompOne: compoent
  },
  data: {
    chProp: 'sss'
  },
  methods: {
    handlesChange () {
      this.chProp += 1
    }
  },
  mounted () {
    console.log(this.$refs.copm1)
  },
  el: '#root',
  template: `
    <div>
      <comp-one ref="copm1" :active="true" :prop-one="chProp" @change="handlesChange"></comp-one>
      <comp-one :active="false"></comp-one>
    </div>
  `
})
