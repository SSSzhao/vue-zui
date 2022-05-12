import './icon.scss'

export default defineComponent({
  name: 'ZIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return () => {
      const { name } = props
      const icon = 'z-icon-' + name
      return <i class={['z-icon', icon]}></i>
    }
  }
})
