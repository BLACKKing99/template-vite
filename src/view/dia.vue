<template>
  <div>
    <LDialog v-model="visible" title="弹窗" />
    <LButton
      size="small"
      @click="openDia"
    >
      open
    </LButton>
  </div>
</template>

<script lang='ts' setup>
const visible = ref(false)
const openDia = () => {
  visible.value = true
}
</script>

<style scoped lang='scss'>

</style>
