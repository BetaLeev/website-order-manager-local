<template>
  <!-- 头部logo -->
  <el-container>
    <el-header :style="themeColor">
      <top-header />
    </el-header>

    <el-container id="body">
      <el-aside width="222px">
        <aside-nav />
      </el-aside>
      <el-container>
        <el-main>
          <bread-crumb />
          <transition name="custom-classes-transition"
            enter-active-class="animated bounceInDown"
            leave-active-class="animated rollOut"
            mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
        <!-- <el-footer>版权所有，欢迎COPY</el-footer> -->
      </el-container>
    </el-container>

  </el-container>
</template>
<script>
import topHeader from "@/components/header";
import AsideNav from "@/components/nav";
import BreadCrumb from "@/components/breadcrumb";
export default {
  beforeMount() {},
  mounted() {},
  computed: {
    themeColor: function() {
      let themeColor;
      if (this.$store.state.themeColor) {
        themeColor = `background-color:${this.$store.state.themeColor}`;
        return themeColor;
      } else {
        if (this.$localStorage.get("themeColor")) {
          this.$store.state.themeColor = this.$localStorage.get("themeColor");
          themeColor = `background-color:${this.$store.state.themeColor}`;
          return themeColor;
        } else {
          themeColor = `background-color:green`;
          return themeColor;
        }
      }
    }
  },
  components: {
    topHeader,
    AsideNav,
    BreadCrumb
    // Home
  },
  data() {
    return {
      color: "background-color:yellow"
    };
  }
};
</script>
<style lang='scss' scoped>
.el-header {
  background-color: red;
}
.el-container {
  // height: 550px;
}
.el-aside {
  // padding: 1%;
}

body {
  width: 100%;
}
#body::before {
  content: "";
  background-color: rgb(209, 212, 212);
  background-attachment: fixed;
  z-index: -1;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.4;
  filter: blur(2px);
}

.el-main {
  height: 520px;
  background-color: white;
}
.el-footer {
  //   background-color: gold;
}
</style>