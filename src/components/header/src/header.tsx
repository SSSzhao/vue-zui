import './header.scss'

export default defineComponent({
  name: 'ZHeader',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  },
  setup(props, { slots }) {
    return () => {
      return (
        <div class="z-header" style={{ height: props.height }}>
          {slots.default?.()}
        </div>
      )
    }
  }
})
