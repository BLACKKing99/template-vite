import { Ref } from 'vue'

export const useContextMenu = (el:Ref<HTMLElement | null>, menuEl:Ref<HTMLElement | null>) => {
  const x = ref<number>(0)
  const y = ref<number>(0)
  const isMenu = ref<boolean>(false)

  const getMenuInfo = () => {
    let menuWidth = 0
    let menuHeight = 0
    const value = menuEl.value?.getBoundingClientRect()
    if (value) {
      menuWidth = value.width
      menuHeight = value.height
    }
    return {
      menuWidth,
      menuHeight
    }
  }

  const getMenuPos = async (e:MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    isMenu.value = true
    await nextTick()
    const { menuWidth, menuHeight } = getMenuInfo()
    const bx = window.innerWidth
    const by = window.innerHeight
    x.value = e.clientX
    y.value = e.clientY
    // 一下是判断是位置否有超出屏幕
    if (e.clientX + menuWidth > bx) {
      x.value = e.clientX - menuWidth
    }

    if (e.clientY + menuHeight > by) {
      y.value = e.clientY - menuHeight
    }
  }

  const closeMenu = () => {
    isMenu.value = false
  }

  onMounted(() => {
    el.value?.addEventListener('contextmenu', getMenuPos)
    window.addEventListener('click', closeMenu, true)
    window.addEventListener('contextmenu', closeMenu, true)
  })

  onUnmounted(() => {
    el.value?.removeEventListener('contextmenu', getMenuPos)
    window.removeEventListener('click', closeMenu, true)
    window.removeEventListener('contextmenu', closeMenu, true)
  })
  return {
    x,
    y,
    isMenu,
    closeMenu
  }
}
