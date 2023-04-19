<template>
  <div>
    <ContextMenu
      :menu-list="[
        {
          id: 1,
          title: '菜单1'
        },
        {
          id: 2,
          title: '菜单2'
        },
        {
          id: 3,
          title: '菜单3'
        }
      ]"
      class="w-[400px] h-[400px] bg-slate-500"
    >
      <div class=" flex items-center justify-center">
        <ContextMenu
          :menu-list="[
            {
              id: 1,
              title: '栏目1'
            },
            {
              id: 2,
              title: '栏目2'
            },
            {
              id: 3,
              title: '栏目3'
            }
          ]"
          class="w-[300px] h-[300px] bg-purple-300"
        >
          <div class="" />
        </ContextMenu>
      </div>
    </ContextMenu>
  </div>
</template>

<script lang='ts' setup>
</script>

<style scoped lang='scss'>

</style>
