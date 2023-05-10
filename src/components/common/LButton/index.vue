<template>
  <button
    class="l_button"
    :class="[`btn-${props.size}`]"
  >
    <slot />
  </button>
</template>

<script lang='ts' setup>

const props = defineProps<{
    size?:'small'|'large'
}>()

</script>

<style scoped lang='scss'>

.l_button {
    padding: 5px 10px;
    background-color: rgba(13,148,136,1);
    color: #fff;
    cursor: pointer;
    border: rgba(13,148,136,1) solid 1px;
    border-radius: 4px;
    transition: .3s;
    font-size: 14px;
    &:hover {
        background-color: rgba(15,118,110,1);
    }
    &:active {
        transform: scale(.95);
    }
}

.btn-small {
    padding: 3px 6px;
}

.btn-large {
    padding: 8px 16px;
}

</style>
