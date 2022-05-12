import type { Component } from 'vue'
import './container.scss'

export type DirectionType = 'horizontal' | 'vertical'

export default defineComponent({
  name: 'ZContainer',
  props: {
    direction: {
      type: String as () => DirectionType,
      default: 'horizontal'
    }
  },
  setup(props, { slots }) {
    // 当子元素中包含 <z-header> 或 <z-footer> 时，全部子元素会垂直上下排列，否则会水平左右排列
    const isVertical = computed(() => {
      if (slots.default) {
        return slots.default().some(i => {
          const tag = i.type as Component
          return ['ZHeader', 'ZFooter'].includes(tag.name!)
        })
      } else {
        return props.direction === 'vertical'
      }
    })
    return () => {
      return (
        <div class={['z-container', isVertical.value && 'is-vertical']}>{slots.default?.()}</div>
      )
    }
  }
})
