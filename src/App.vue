<template>
  <div style="background: transparent">
    <z-button
      type="primary"
      :loading="loading"
      icon="edit"
      size="medium"
      round
      @click="loading = !loading"
      >按钮</z-button
    >
  </div>
</template>
<script setup lang="ts">
const loading = ref(false)
</script>

<style lang="scss">
.page {
  background: transparent;
}
</style>
