<template>
  <div
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    class="split-panel"
  >
    <div
      :style="{
        [type]:`${precent}%`
      }"
      class="absolute"
      :class="[fClass]"
    >
      <slot name="paneF" />
    </div>
    <div
      class="resize"
      :style="{
        [resizeType]:`${precent}%`
      }"
      :class="`${splitInfo.direction || 'vertical'}-resizer`"
      @mousedown="onMouseDown"
    />
    <div
      :style="{
        [type]:`${100-precent}%`
      }"
      class="absolute"
      :class="[sClass]"
    >
      <slot name="paneS" />
    </div>
  </div>
</template>

<script lang='ts' setup>
interface ISplitInfo {
  defaultPrecent?: number
  direction?: 'vertical'|'level'
  minPercent?: number
  maxPercent?: number
}
const props = defineProps<{
  splitInfo:ISplitInfo
}>()

const splitInfo = toRef(props, 'splitInfo')

const isLev = computed(() => {
  return splitInfo.value.direction === 'level'
})

const precent = ref<number>(50)
const type = ref<'width' | 'height'>('width')
const isActive = ref(false)
const fClass = ref(`${splitInfo.value.direction || 'vertical'}-f`)
const sClass = ref(`${splitInfo.value.direction || 'vertical'}-s`)
const resizeType = ref<'top'|'left'>('top')

const init = () => {
  const { defaultPrecent } = splitInfo.value
  precent.value = defaultPrecent || 50
  type.value = isLev.value ? 'height' : 'width'
  resizeType.value = isLev.value ? 'top' : 'left'
}

init()

onMounted(() => {
  document.addEventListener('mouseup', onCancleActive)
})

const onMouseDown = (e:MouseEvent) => {
  isActive.value = true
}

const onCancleActive = () => {
  isActive.value = false
}

const onMouseMove = (e:MouseEvent) => {
  if (isActive.value) {
    const curtarget = e.currentTarget as unknown as HTMLDivElement
    let target = e.currentTarget as unknown as HTMLDivElement
    // 容器距离浏览器顶部/左边的距离
    let offset = 0
    while (target) {
      console.log(target.offsetTop, 'target.offsetTop')
      offset += isLev.value ? target.offsetTop : target.offsetLeft
      target = target.offsetParent as unknown as HTMLDivElement
    }
    // 拖拽先距离容器顶/左的距离
    const currentPage = isLev.value ? e.pageY : e.pageX
    // 容器的宽度或者高度
    const targetWidth = isLev.value ? curtarget.offsetHeight : curtarget.offsetWidth
    // 计算出百分比
    const percents = Math.floor(((currentPage - offset) / targetWidth) * 10000) / 100

    if (splitInfo.value.minPercent && percents < splitInfo.value.minPercent) return
    if (splitInfo.value.maxPercent && percents > splitInfo.value.maxPercent) return
    if (percents >= 100) return
    precent.value = percents
  }
}

const onMouseUp = () => {
  onCancleActive()
}

</script>

<style scoped lang='scss'>

.split-panel {
  position: relative;
  width: 100%;
  height: 100%;
  .resize {
    position: absolute;
    background-color: #e5e6eb;
    z-index: 2;
    &::after {
      content: '\e647';
      font-family: "iconfont";
      font-size: 13px;
      color: #000;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .vertical-resizer {
    height: 100%;
    width: 4px;
    cursor: col-resize;
  }

  .level-resizer {
    width: 100%;
    height: 4px;
    cursor: row-resize;
  }

  .vertical-f {
    left: 0;
    height: 100%;
  }

  .vertical-s {
    right: 0;
    height: 100%;
  }

  .level-f {
    top: 0;
    width: 100%;
  }

  .level-s {
    bottom: 0;
    width: 100%;
  }
}

</style>
