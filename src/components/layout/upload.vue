<template>
  <div class="upload w-40 h-40 border border-solid border-blue-400">
    <template v-if="upStatus === 'none'">
      <div
        class="upload-none w-full h-full flex items-center justify-center cursor-pointer"
        @click="goUpload"
      >
        <i class="iconfont icon-tianjia text-3xl" />
        <input
          type="file"
          hidden
          ref="upComp"
          :value="upValue"
          @change="handleUploadChange"
        >
      </div>
    </template>
    <template v-else-if="upStatus === 'uploading'">
      <div class="w-full h-full overflow-hidden">
        <img
          class="object-cover w-full h-full"
          :src="upUrl"
        >
      </div>
    </template>
    <template v-if="upStatus === 'uploaded'">
      <div>uploaded</div>
    </template>
  </div>
</template>

<script lang='ts' setup>
const upStatus = ref<'none'|'uploading'|'uploaded'>('none')

const upUrl = ref<string>('')

const upValue = ref()

const upComp = ref<HTMLInputElement | null>(null)

const goUpload = () => {
  upComp.value?.click()
}

const handleUploadChange = (e:any) => {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.onload = (event) => {
    upUrl.value = event.target?.result as string
    upStatus.value = 'uploading'
  }
  reader.readAsDataURL(file)
}
</script>

<style scoped lang='scss'>

</style>
