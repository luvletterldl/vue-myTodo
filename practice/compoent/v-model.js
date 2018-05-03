import Vue from 'vue'

const compoent = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: ['value1'],
  template: `
    <div>
      <input type="text" @input="handleInput" :value="value1">
    </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  el: '#root',
  components: {
    CompOne: compoent
  },
  data () {
    return {
      value: '234'
    }
  },
  template: `<comp-one v-model="value"></comp-one>`
})
