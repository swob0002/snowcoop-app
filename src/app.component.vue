<template>
  <div id="app">
    <el-container>
      <!-- Use computed property isLogin to hide sidebar -->
      <el-aside width="228px" v-if="isLogIn">
        <sideNavigation/> <!-- Adds Side Navigation -->
      </el-aside>
      <el-main>
        <router-view></router-view> <!-- Adds Router Views -->
      </el-main>
    </el-container>
  </div>
</template>


<script src="./app.component.js"></script>
<style src="./app.component.css"></style>