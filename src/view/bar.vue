<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <imgOver
      :img-style="{
        width:'320px',
        height:'320px'
      }"
      :form-list="formList"
    />
  </div>
</template>

<script lang='ts' setup>
import { formListType } from '@/types/components'

const formList:formListType[] = [
  {
    id: 1,
    url: 'https://cdn.pixabay.com/photo/2023/02/12/21/29/flowers-7785967_640.jpg',
    position: 'center'
  },
  {
    id: 2,
    url: 'https://cdn.pixabay.com/photo/2023/03/02/19/37/tunnel-7826204__340.jpg',
    position: 'down'
  },
  {
    id: 3,
    url: 'https://cdn.pixabay.com/photo/2023/03/11/15/28/building-7844703__340.jpg',
    position: 'left'
  },
  {
    id: 4,
    url: 'https://cdn.pixabay.com/photo/2023/03/05/14/00/motion-7831456__340.jpg',
    position: 'right'
  },
  {
    id: 5,
    url: 'https://cdn.pixabay.com/photo/2023/03/08/20/52/architecture-7838713_640.jpg',
    position: 'top'
  }
]

</script>

<style scoped lang='scss'>

</style>
