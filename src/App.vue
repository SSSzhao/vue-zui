<template>
  <div>
    <z-container>
      <z-header>Header</z-header>
      <z-main>Main</z-main>
    </z-container>

    <z-container>
      <z-header>Header</z-header>
      <z-main>Main</z-main>
      <z-footer>Footer</z-footer>
    </z-container>

    <z-container>
      <z-aside width="200px">Aside</z-aside>
      <z-main>Main</z-main>
    </z-container>

    <z-container>
      <z-header>Header</z-header>
      <z-container>
        <z-aside width="200px">Aside</z-aside>
        <z-main>Main</z-main>
      </z-container>
    </z-container>

    <z-container>
      <z-header>Header</z-header>
      <z-container>
        <z-aside width="200px">Aside</z-aside>
        <z-container>
          <z-main>Main</z-main>
          <z-footer>Footer</z-footer>
        </z-container>
      </z-container>
    </z-container>

    <z-container>
      <z-aside width="200px">Aside</z-aside>
      <z-container>
        <z-header>Header</z-header>
        <z-main>Main</z-main>
      </z-container>
    </z-container>

    <z-container>
      <z-aside width="200px">Aside</z-aside>
      <z-container>
        <z-header>Header</z-header>
        <z-main>Main</z-main>
        <z-footer>Footer</z-footer>
      </z-container>
    </z-container>
  </div>
</template>
<script setup lang="ts">

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
