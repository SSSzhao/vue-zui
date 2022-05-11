import { buttonProps } from './button-types'
import './button.scss'

export default defineComponent({
  name: 'ZButton',
  inheritAttrs: false,
  props: buttonProps,
  emits: ['click'],
  setup (props, { slots, emit }) {
    const buttonClass = computed(() => {
      const { size, type, plain, round, circle, disabled } = props
      const baseClass = 'z-button'
      const typeClass = type ? `${baseClass}--${type}` : ''
      const sizeClass = size ? `${baseClass}--${size}` : ''
      const plainClass = plain ? 'is-plain' : ''
      const roundClass = round ? 'is-round' : ''
      const circleClass = circle ? 'is-circle' : ''
      const disabledClass = disabled ? 'is-disabled' : ''
      return [baseClass, typeClass, sizeClass, plainClass, roundClass, circleClass, disabledClass].filter(Boolean).join(' ')
    })

    const onClick = (e: MouseEvent) => {
      emit('click', e)
    }

    return () => {
      const { disabled, nativeType } = props
      return (
        <button class={buttonClass.value} disabled={disabled} type={nativeType} onClick={onClick}>
          <span>{ slots.default?.() }</span>
        </button>
      )
    }
  }
})
