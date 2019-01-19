<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for='(bread,index) in breadCrunmItem'
        :key='index'
        :to='bread.path'>{{bread.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  beforeMount() {
    this.breadCrunmItem = [
      { path: "/", title: "首页" },
      { path: "/add", title: "添加" }
    ];
  },
  beforeCreate() {},
  mounted() {},
  data() {
    return {
      breadCrunmItem: []
    };
  }
};
</script>

<style lang='scss' scoped>
.breadcrumb {
  width: 30%;
  padding: 1%;
  margin-bottom: 20px;
}
</style>