<template>
  <div class="w-screen h-screen overflow-hidden flex justify-center items-center mt-[-40px]">
    <div class="w-[70vw] h-[50vh] border border-solid border-black">
      <SplitPanel
        :split-info="{
          defaultPrecent:50,
          direction:'level',
          minPercent:20
        }"
      >
        <template #paneF>
          222
        </template>
        <template #paneS>
          <SplitPanel
            :split-info="{
              defaultPrecent:50,
              minPercent:20,
              direction:'vertical'
            }"
          />
        </template>
      </SplitPanel>
    </div>
  </div>
</template>

<script lang='ts' setup>
</script>

<style scoped lang='scss'>

</style>
