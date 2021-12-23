<template>
  <button class="css-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
//父组件向子组件传递数据
defineEmits(['click'])
</script>

<style scoped lang="less">
.css-button {
  width: 56px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  appearance: none;
  background: #12B9FF;
  border: none;
  border-radius: 2px;
  color: #fff;
  &:active {
    background: rgb(92, 185, 243);
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
}
</style>