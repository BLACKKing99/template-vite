interface IProps<T> {
    modelValue:T
}

type IEmit = (event: 'update:modelValue', ...args: any[]) => void

/**
 * 注意 modelValue只能是使用ref定义的响应式数据
 * @props 组件的props 直接传入就好 需要传入modelValue的类型
 * @emit 组件的emit
 */

export const useVModel = <T extends object>(props:IProps<T>, emit:IEmit) => {
  const model = computed({
    get () {
      return new Proxy(props.modelValue, {
        set (target, key, newValue) {
          emit('update:modelValue', {
            ...target,
            [key]: newValue
          })
          return true
        }
      })
    },
    set (value) {
      emit('update:modelValue', value)
    }
  })
  return {
    model
  }
}
