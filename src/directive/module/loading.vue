<template>
  <div
    class="w-full h-full flex items-center justify-center absolute left-0 top-0 loading flex-col"
    :class="isMask ? 'bg-[#00000024]' : ''"
  >
    <template v-if="isCustom">
      <ul class="c-loading">
        <li
          :style="{
            '--delay': index,
          }"
          class="c-loading-item"
          v-for="(item,index) in title || '加载中...'"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </template>
    <template v-else>
      <ul class="l-loading">
        <li
          :style="{
            '--delay': (item + 1),
            backgroundColor: colorList[item]
          }"
          class="l-loading-item"
          v-for="item in 6"
          :key="item"
        />
      </ul>
      <span class="mt-2 text-sm text-slate-600">{{ title }}</span>
    </template>
  </div>
</template>

<script lang='ts' setup>

/**
 * @param title:加载的名字
 * @param fullscreen 是在当前元素还是body元素
 * @param isCustom 是否自定义加载  自定义加载就是把title 变成动画
 * @param isMask 是否需要蒙版
 */

defineProps<{
    title?:string,
    fullscreen?:boolean,
    isCustom?:boolean,
    isMask?:boolean
}>()

const colorList:Record<number, string> = {
  1: 'rgb(34, 134, 159)',
  2: 'rgb(215, 59, 226)',
  3: 'rgb(191, 46, 130)',
  4: 'rgb(224, 46, 36)',
  5: 'rgb(244, 24, 141)',
  6: 'rgb(27, 227, 84)'
}
</script>

<style scoped lang='scss'>
@keyframes aLoading {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-15px);
  }
  40% {
    transform: translateY(0);
  }
}

.c-loading{
  display: flex;
  align-items: center;
  &-item {
    animation: aLoading 1s ease-in-out infinite;
    margin-right: 4px;
    animation-delay: calc(var(--delay) * 0.1s);
    -webkit-box-reflect: below -4px linear-gradient(transparent, rgba(0,0,0,0.4));
  }
}
.l-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  &-item {
    width: 6px;
    height: 20px;
    background-color: #000;
    border-radius: 3px;
    margin-right: 8px;
    animation: aLoading 1s ease-in-out infinite;
    animation-delay: calc(var(--delay) * 0.1s);
    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>
