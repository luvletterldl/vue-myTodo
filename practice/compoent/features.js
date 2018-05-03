import Vue from 'vue'

const ChildComponent = {
  template: '<div>{{data.value}} child component</div>',
  inject: ['lbl', 'data'],
  mounted () {
    console.log(this.lbl, this.value)
    console.log(this.$parent.$options.name)
  }
}

const component = {
  name: 'comp',
  components: {
    ChildComponent
  },
  // template: `
  //   <div :style="style">
  //     <div class="header">
  //       <slot name="header"></slot>
  //     </div>
  //     <div class="body">
  //       <slot name="body"></slot>
  //     </div>
  //   </div>
  // `,
  template: `
    <div :style="style">
      <slot value="345" :ss="ss" ldl="lbl"></slot>
      <child-component></child-component>
    </div>
  `,
  data () {
    return {
      style: {
        width: '168px',
        height: '200px',
        border: '2px solid #bbb'
      },
      ss: 'Senar'
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  provide () {
    const data = {}
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      lbl: this,
      data
    }
  },
  mounted () {
    console.log(this.$refs.comp.ss)
    console.log(this.$refs.span)
  },
  template: `
    <div>
      <comp-one ref="comp">
        <span slot-scope="props" ref="span">{{props.ldl}} this {{value}} is header:{{props.ss}}</span>
      </comp-one>
      <input type="text" :value="value">
    </div>
  `
})
