import { PropType } from 'vue'

export type IButtonSize = '' | 'medium' | 'small' | 'mini'
export type IButtonType = '' | 'text' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
export type IButtonNativeType = 'button' | 'submit' | 'reset'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: ''
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: ''
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  nativeType: {
    type: String as PropType<IButtonNativeType>,
    default: 'button'
  },
  loading: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  }
}
