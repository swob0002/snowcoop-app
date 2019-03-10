<!-- 5. Add layouts in app.component.vue file -->

<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <el-container>
      <el-aside width="200px"></el-aside>
      <el-main>
        <!-- Router View -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>


<script src="./app.component.js"></script>
<style src="./app.component.css"></style>