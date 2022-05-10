import './button.scss'

export default defineComponent({
  name: 'ZButton',
  setup (props, { slots }) {
    return () => {
      return <div class='z-button'>{ slots.default?.() }</div>
    }
  }
})
