<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <el-container>
      <!-- Use computed property isLogin to hide sidebar using v-if attribute -->
      <el-aside width="228px" v-if="isLogIn"> <!-- or 200px, test -->
        <side-navigation/> <!-- Adds Side Navigation -->
      </el-aside>
      <el-main>
        <router-view></router-view> <!-- Adds Router View -->
      </el-main>
    </el-container>
  </div>
</template>


<script src="./app.component.js"></script>
<style src="./app.component.css"></style>