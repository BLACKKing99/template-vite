<template>
  <transition>
    <div
      v-show="visible"
      class="fixed left-0 top-0 right-0 bottom-0 z-[2000]"
      ref="lDialog"
    >
      <div class="l_dialog">
        <div
          class="l_dialog_header"
          v-if="$slots.header || title"
        >
          <slot name="header">
            <span>{{ title }}</span>
            <i
              class="iconfont icon-close"
              @click="close"
            />
          </slot>
        </div>
        <div class="l_dialog_body">
          <slot />
        </div>
        <div
          class="l_dialog_footer"
          v-if="$slots.header"
        >
          <slot name="footer" />
        </div>
      </div>
      <div
        class="l_dialog_mask"
        @click="close"
        ref="mask"
      />
    </div>
  </transition>
</template>

<script lang='ts' setup>
interface IProps {
    appendToBody?: boolean,
    modelValue: boolean
    maskToBody?:boolean
    title?:string
}

// 父组件传来的数据
const props = defineProps<IProps>()

// mask ref实例
const mask = ref<Node>()
// lDialog ref实例
const lDialog = ref<Node>()
// 是否打开弹窗
const visible = ref<boolean>(false)

const emit = defineEmits(['update:modelValue', 'close'])

onMounted(() => {
  if (props.maskToBody && mask.value) document.body.appendChild(mask.value)
  if (props.appendToBody && lDialog.value) document.body.appendChild(lDialog.value)
})

const close = () => {
  visible.value = false
}

watch(() => props.modelValue, (val) => {
  if (val) {
    // 打开弹窗
    visible.value = true
  }
})

watch(() => visible.value, (val) => {
  if (!val) {
    console.log(44)

    emit('close')
    emit('update:modelValue', false)
  }
})

</script>

<style scoped lang='scss'>
.l_dialog {
  margin: 0 auto;
  background-color: #fff;
  margin-top: 15vh;
  width: 50%;
  border-radius: 4px;
  &_body {
    padding: 20px 30px;
  }
  &_header {
    padding: 10px;
    position: relative;
    .icon-close {
      position: absolute;
      right: 20px;
      top: 50%;
      cursor: pointer;
      transform: translateY(-50%);
      &:hover {
        color: $gry-1;
      }
    }
  }
}

.l_dialog_mask {
  position: fixed;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .2);
  top: 0;
  bottom: 0;
  z-index: -1;
}
</style>
