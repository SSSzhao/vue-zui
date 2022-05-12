import './aside.scss'

export default defineComponent({
  name: 'ZAside',
  props: {
    width: {
      type: String,
      default: '300px'
    }
  },
  setup(props, { slots }) {
    return () => {
      return (
        <div class="z-aside" style={{ width: props.width }}>
          {slots.default?.()}
        </div>
      )
    }
  }
})
