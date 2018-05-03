import Vue from 'vue'

const component = {
  props: ['props1'],
  name: 'comp',
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  render (createElement) {
    return createElement('div', {
      style: this.style
      // on: {
      //   click: () => { this.$emit('click') }
      // }
    }, [
      this.$slots.header,
      this.props1
    ])
  },
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
  methods: {
    handleClick () {
      console.log('clicked')
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
  // template: `
  //     <comp-one ref="comp">
  //       <span ref="span">{{value}}</span>
  //     </comp-one>
  // `,
  render (createElement) {
    return createElement('comp-one', {
      ref: 'comp',
      props: {
        props1: this.value
      },
      // on: {
      //   click: this.handleClick
      // }
      nativeOn: {
        click: this.handleClick
      }
    }, [createElement('span', {
      ref: 'span',
      slot: 'header',
      domProps: {
        innerHTML: '<span>555</span>'
      },
      attrs: {
        id: 'test-id'
      }
    }, this.value)])
  }
})
