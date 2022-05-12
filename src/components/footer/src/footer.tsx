import './footer.scss'

export default defineComponent({
  name: 'ZFooter',
  setup(props, { slots }) {
    return () => {
      return <div class="z-footer">{slots.default?.()}</div>
    }
  }
})
