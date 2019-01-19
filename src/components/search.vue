<template>
  <el-row>
    <el-col :span="2">
      <div class="grid-content bg-purple">
        <span>类型选择：</span>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple-light">
        <el-select v-model="value"
          @change='handleSearch'
          placeholder="请选择">
          <el-option v-for="item in optionType"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </div>
    </el-col>

    <el-col :offset="1"
      :span="3">
      <div class="grid-content bg-purple-light"><span>时间范围选择：</span></div>
    </el-col>
    <el-col :span="3">
      <div class="grid-content bg-purple">
        <el-date-picker v-model="rangeDate"
          @change='handleSearch'
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions">
        </el-date-picker>
      </div>
    </el-col>
    <el-col :span="7">
      <div class="grid-content bg-purple-light">
        <el-button>搜索</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
// import util from "@/util";

export default {
  mounted() {},
  data() {
    return {
      value: "",
      rangeDate: "",
      optionType: [
        "web前端",
        "后端",
        "图片设计",
        "小程序开发",
        "网站维护",
        "其他"
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  methods: {
    handleSearch() {
      this.$store.state.searchType = this.value;
      this.$store.state.searchDateBegin = Date.parse(this.rangeDate[0]);
      this.$store.state.searchDateEnd = Date.parse(this.rangeDate[1]);
    }
  }
};
</script>

<style lang='scss' scoped>
.el-row {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px dotted orchid;
}
span {
  line-height: 40px;
}
</style>