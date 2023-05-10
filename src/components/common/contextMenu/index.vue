<template>
  <div
    ref="contextMenuRef"
    @click.stop
  >
    <slot />
    <Teleport to="body">
      <ul
        v-if="isMenu"
        class="fixed flex flex-col rounded-sm bg-slate-50"
        ref="menuRef"
        :style="{
          left:`${x}px`,
          top:`${y}px`
        }"
      >
        <li
          v-for="item in menuList"
          :key="item.id"
          @click.stop="menuClick(item)"
          @contextmenu.prevent
          class="py-2 px-3 hover:bg-slate-400 duration-300 cursor-pointer whitespace-nowrap"
        >
          {{ item.title }}
        </li>
      </ul>
    </Teleport>
  </div>
</template>

<script lang='ts' setup>
import { useContextMenu } from '@/hooks/useContextMenu'

  interface IMenuList{
    id:number,
    title:string
  }

const contextMenuRef = ref<HTMLElement | null>(null)

const menuRef = ref<HTMLElement | null>(null)

const { isMenu, x, y, closeMenu } = useContextMenu(contextMenuRef, menuRef)

defineProps<{
    menuList: IMenuList[]
  }>()

const emit = defineEmits(['menuClick'])

const menuClick = (menu:any) => {
  closeMenu()
  emit('menuClick', menu)
}
</script>

  <style scoped lang='scss'>

  </style>
