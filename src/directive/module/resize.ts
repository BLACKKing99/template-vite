import { Directive } from 'vue'
import { lDebounce } from '@/util/tool.util'

const map = new WeakMap()
const ob = new ResizeObserver(lDebounce((resizes:any) => {
  for (const resize of resizes) {
    const bindFn = map.get(resize.target)
    if (bindFn) bindFn(resize.contentRect)
  }
}))

const vResize:Directive = {
  mounted (el, bind) {
    map.set(el, bind.value)
    ob.observe(el)
  },
  unmounted (el) {
    ob.unobserve(el)
    map.delete(el)
  }
}

export default vResize
