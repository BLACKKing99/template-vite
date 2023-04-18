import { Directive, VNode, render } from 'vue'
import LoadingVue from './loading.vue'
let vNode:VNode|null = null

let fullscreen:boolean = false

let isMask:boolean = true

let isCustom:boolean = false

const appendElement = (el:Element, vNode:VNode|null, remove = false) => {
  if (!vNode?.el) return
  // 加这一段代码主要就是因为热更新会报错
  let isExistence = true
  el.childNodes.forEach(item => {
    isExistence = item === vNode?.el
  })
  if (remove) {
    isExistence && el.removeChild(vNode?.el as Element)
    return
  }
  el.appendChild(vNode?.el as Element)
}

const vLoading:Directive = {
  mounted (el:HTMLElement, bind) {
    el.classList.add('relative')
    const text = el.getAttribute('loading-text')
    // 从修饰词中去变量
    fullscreen = bind.modifiers.fullscreen || false
    isMask = bind.modifiers.isMask || true
    isCustom = bind.modifiers.isCustom || false
    vNode = h(LoadingVue, {
      title: text,
      isMask,
      isCustom
    })
  },
  updated (el:Element, bind) {
    const ele = fullscreen ? document.body : el
    if (bind.value) {
      render(vNode, el)
      appendElement(ele, vNode, false)
    } else {
      appendElement(ele, vNode, true)
    }
  }
}

export default vLoading
