import './main.scss'

export default defineComponent({
  name: 'ZMain',
  setup (props, { slots }) {
    return () => {
      return <div class='z-main'>{ slots.default?.() }</div>
    }
  }
})
