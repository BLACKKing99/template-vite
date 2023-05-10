<template>
  <div
    class="img-over"
    ref="el"
    :style="imgStyle"
    :class="dir"
    @mouseenter="targetMove"
    @mouseleave="targetLeave"
  >
    <template
      v-for="item of formList"
      :key="item.id"
    >
      <img
        :src="item.url"
        class="w-full h-full object-cover img-con"
        :class="`${item.position}-img`"
        :style="{
          transition:duration
        }"
        @click="imgClick(item)"
      >
    </template>
  </div>
</template>

<script lang='ts' setup>
import { formListType } from './type'
import { PropType, StyleValue } from 'vue'

const el = ref<HTMLDivElement | null>(null)

defineProps({
  formList: {
    type: Array as PropType<formListType[]>,
    default: () => ([])
  },
  imgStyle: {
    type: Object as PropType<StyleValue>,
    default: () => ({})
  },
  duration: {
    type: String,
    default: '300'
  }
})

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
  (e:'img-click', value:formListType): void
}>()

const dir = ref<string>('')

let react:DOMRect

let tan:number

onMounted(() => {
  react = el.value!.getBoundingClientRect()
  tan = Math.atan(react?.height / react?.width)
})

const targetMove = (e:MouseEvent) => {
  const px = e.offsetX - react?.width / 2
  const py = react?.height / 2 - e.offsetY
  const ctan = Math.atan2(py, px)
  let positition = ''
  if (ctan < tan && ctan > -tan) {
    positition = 'right'
  } else if (ctan > tan && ctan < (Math.PI - tan)) {
    positition = 'top'
  } else if (ctan < -tan && ctan > (-Math.PI + tan)) {
    positition = 'down'
  } else {
    positition = 'left'
  }
  dir.value = positition
}

const targetLeave = () => {
  dir.value = ''
}

const imgClick = (item:formListType) => {
  emit('img-click', item)
}

</script>

<style scoped lang='scss'>
.img-over{
    position: relative;
    overflow: hidden;
    .img-con{
      position: absolute;
      width: 100%;
      height: 100%;
      display: inline-block;
      z-index: 2;
      transition: .3s;
    }
    .top-img {
      top: -100%;
    }
    .left-img {
      left: -100%;
      top: 0;
    }
    .right-img {
      right: -100%;
      top: 0;
    }
    .down-img {
      bottom: -100%;
    }
}

.top {
  .top-img {
    top: 0;
  }
}
.down {
  .down-img {
    bottom: 0;
  }
}
.right {
  .right-img {
    right: 0;
  }
}
.left {
  .left-img {
    left: 0;
  }
}
</style>
