<template>
  <div>
    <!-- 头部 -->
    <my-header></my-header>
      <div class="container-fluid">
        <div class="row">
        <!-- 侧边栏 -->
        <my-sidebar></my-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <!-- 列表 -->
        <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/myheader.vue';
import MySidebar from '@/components/mysidebar.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MySidebar
  }
};
</script>

<style>

</style>
