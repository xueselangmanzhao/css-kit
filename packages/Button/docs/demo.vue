<template>
  <div>
    <css-button @click="onClick(1)">确定</css-button>
    <css-button @click="onClick(2)">delete</css-button>
    <css-button @click="onClick(3)">删除</css-button>
  </div>
</template>

<script setup>
const onClick = (num) => { alert(`我是第 ${num} 个自定义按钮`) }
</script>