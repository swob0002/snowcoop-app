<template>
    <div id="dashboardPage">
        <div class="map-wrapper">
            <div class="map-header">
                <span class="map-title" v-if="addressList">
                    {{ `Hi ${firstName}, Welcome to Snowcoop. You have ${addressList.length} addresses.` }}
                </span>
            </div>
            <div class="map-view-wrapper">
                <el-card class="map-view-card">  
                    <map-view
                        v-if="addressList"
                        v-bind:showList="false"
                        v-bind:addressList="addressList">
                    </map-view>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script src="./dashboard-page.component.js"></script>
<style src="./dashboard-page.component.css"></style>