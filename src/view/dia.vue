<template>
  <div>
    <contextMenu
      :obj="obj"
      v-bind="obj"
    />
  </div>
</template>

<script lang="ts" setup>
import contextMenu from '@/components/layout/contextMenu.vue'

const obj = ref({
  a: 1,
  b: 2
})
</script>

<style scoped lang='scss'>
</style>
