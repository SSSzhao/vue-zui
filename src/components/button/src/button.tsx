import { buttonProps } from './button-types'
import { useNamespace } from '../../../hooks/use-namespace'
import { Icon } from '../../icon'
import './button.scss'

export default defineComponent({
  name: 'ZButton',
  inheritAttrs: false,
  props: buttonProps,
  emits: ['click'],
  setup(props, { slots, emit }) {
    const { size, type, plain, round, circle, disabled, nativeType, loading, icon } = toRefs(props)

    const buttonClass = computed(() => {
      const { b, w, m } = useNamespace('button')
      return [
        b(),
        m(type.value),
        m(size.value),
        plain.value && w('plain'),
        round.value && w('round'),
        circle.value && w('circle'),
        disabled.value && w('disabled'),
        loading.value && w('loading')
      ]
        .filter(Boolean)
        .join(' ')
    })

    const onClick = (e: MouseEvent) => {
      if (loading.value || disabled.value) return
      emit('click', e)
    }

    return () => {
      return (
        <button
          class={buttonClass.value}
          disabled={disabled.value}
          type={nativeType.value}
          onClick={onClick}
        >
          {loading.value && <Icon name="loading" />}
          {icon.value && !loading.value && <Icon name={icon.value} />}
          {slots.default && <span>{slots.default()}</span>}
        </button>
      )
    }
  }
})
