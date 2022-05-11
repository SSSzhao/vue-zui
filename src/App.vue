<template>
  <div>
    <z-button type="" disabled name="123" @click="clcck">按钮</z-button>
    <z-button type="primary" size="medium" round @click="clcck">按钮</z-button>
    <z-button type="primary" size="small" round @click="clcck">按钮</z-button>
    <z-button type="primary" size="mini" round @click="clcck">按钮</z-button>
  </div>
</template>
<script setup lang="ts">
const clcck = () => {
  console.log(1)
}
</script>

<style lang="scss">
  .z-header, .z-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .z-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .z-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .z-container {
    margin-bottom: 40px;
  }

  .z-container:nth-child(5) .z-aside,
  .z-container:nth-child(6) .z-aside {
    line-height: 260px;
  }

  .z-container:nth-child(7) .z-aside {
    line-height: 320px;
  }
</style>
