<template>
  <el-row>
    <el-col :offset="10"
      :span='10'>
      <a href="#"
        @click='changeTheme'>切换主题色</a>
      <el-tooltip class="item"
        effect="dark"
        placement="bottom"
        transition="el-zoom-in-bottom">
        <template slot="content">
          <img height="180px"
            width="140px"
            :src="wechat"
            alt="">
        </template>
        <a href="#">帮助中心</a>
      </el-tooltip>
      <a href="#">中文/En</a>

    </el-col>
    <el-dialog title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <p>请选择颜色</p>
      <span>
        <el-color-picker v-model="color"></el-color-picker>
      </span>
      <span slot="footer"
        class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
          @click="confirmColor">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>

</template>

<script>
const wechat = require("@/assets/wechat.jpg");
export default {
  data() {
    return {
      wechat: wechat,
      dialogVisible: false,
      color: "#d92329"
    };
  },
  methods: {
    changeTheme() {
      this.dialogVisible = true;
    },
    confirmColor() {
      this.$store.state.themeColor = this.color;
      this.$localStorage.set("themeColor", this.color);
      this.dialogVisible = false;
    }
  }
};
</script>

<style lang='scss'>
.el-color-picker__trigger {
  width: 340px;
}
a {
  font-size: 1.1rem;
  line-height: 60px;
  color: white;
  padding-left: 10px;
  padding-right: 25px;
  text-decoration: none;
}
a:hover {
  color: lightblue;
}
</style>