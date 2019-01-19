<template>
  <el-menu default-active="2"
    class="el-menu-vertical-demo"
    text-color="red"
    :router="true"
    active-text-color="#ffd04b">
    <el-menu-item index="1"
      :route="{path:'/'}">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>

    <el-menu-item index="2"
      :route="{path:'/add'}">
      <i class="el-icon-menu"></i>
      <span slot="title">添加最新任务</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title"
        :route="{path:'/task-complete'}">
        <el-badge :value="14"
          class="item">
          查看已经完成
        </el-badge>
      </span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.el-menu {
  height: 100%;
}
</style>