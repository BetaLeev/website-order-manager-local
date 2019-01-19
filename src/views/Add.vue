<template>
  <div>
    <div class="form">
      <el-row>
        <el-col :offset="2"
          :span="3">
          <div class="step">

            <el-steps direction="vertical"
              :active="currentStep">
              <el-step title="步骤 1"></el-step>
              <el-step title="步骤 2"></el-step>
              <el-step title="步骤 3"></el-step>
              <el-step title="步骤 4"></el-step>
              <el-step title="步骤 5"></el-step>
            </el-steps>
          </div>
        </el-col>
        <el-col :span='14'
          :offset="1">
          <h1>请在此处添最新任务</h1>

          <el-form ref="form"
            :model="form"
            :rules="rules"
            label-width="80px">
            <el-form-item label="事件名称"
              prop="title">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="项目类型"
              prop='type'>
              <el-select v-model="form.type"
                placeholder="请选择类型">
                <el-option v-for='item in optionType'
                  :key='item.value'
                  :label='item'
                  :value='item'></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="交付时间"
              prop='deadLine'>
              <el-date-picker type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="form.deadLine"
                style="width: 60%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="重要">
              <el-switch v-model="form.important"></el-switch>
            </el-form-item>
            <el-form-item label="技术栈"
              prop='technologic'>
              <el-checkbox-group v-model="form.technologic">
                <el-checkbox label="vue"></el-checkbox>
                <el-checkbox label="vue-router"></el-checkbox>
                <el-checkbox label="vuex"></el-checkbox>
                <el-checkbox label="jquery"></el-checkbox>
                <el-checkbox label="js"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="预付款"
              prop='prepayment'>
              <el-slider v-model="form.prepayment"
                :step="20"
                show-stops>
              </el-slider>
            </el-form-item>
            <el-form-item label="项目难度"
              prop='diffculty'>
              <el-radio-group v-model='form.diffculty'>
                <el-radio label="轻松"></el-radio>
                <el-radio label="一般"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="详细介绍"
              pro='des'>
              <el-input type="textarea"
                autosize
                v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                @click="onSubmit('form')">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  // computed: {
  //   currentActiveStep: function() {

  //   }
  // },
  data() {
    return {
      currentStep: 0,
      optionType: [
        "web前端",
        "后端",
        "图片设计",
        "小程序开发",
        "网站维护",
        "其他"
      ],
      form: {
        title: "",
        type: "",
        deadLine: "",
        important: false,
        technologic: [],
        prepayment: 20,
        diffculty: "",
        desc: "",
        localTime: this.$moment().format("YYYY-MM-DD h:mm:ss")
      },
      rules: {
        title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur"
          }
        ],
        type: [
          { required: true, message: "请选择项目类型", trigger: "change" }
        ],
        deadLine: [
          {
            // type: "date",
            required: true,
            message: "请选择最晚交付日期",
            trigger: "change"
          }
        ],
        technologic: [
          {
            type: "array",
            min: 1,
            required: true,
            message: "咋也得至少选择一种技术栈吧",
            trigger: "change"
          }
        ],
        prepaymet: [
          {
            required: true,
            message: "不给定金的单子可不能接",
            trigger: "blur"
          }
        ],
        diffculty: [
          {
            required: true,
            message: "评价一下难易程度啊!",
            trigger: "change"
          }
        ],
        desc: [
          {
            min: 10,
            max: 30,
            required: true,
            message: "比较详细的介绍一下啊!",
            trigger: "blur"
          }
        ]
      },
      tableData: []
    };
  },

  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$localStorage.set("localTableData", JSON.stringify(this.form));
          if (this.$localStorage.get("tableData")) {
            this.tableData = JSON.parse(this.$localStorage.get("tableData"));
          }
          this.tableData.push(
            JSON.parse(this.$localStorage.get("localTableData"))
          );
          this.$localStorage.set("tableData", JSON.stringify(this.tableData));
          this.$localStorage.get("tableData");
          this.$localStorage.remove("localTableData");
          var _this = this;
          this.$message({
            showClose: true,
            message: "恭喜,又成功接到了单子~💋",
            type: "success",
            during: 300,
            onClose() {
              _this.$router.push("/");
            }
          });
        } else {
          this.$message({
            showClose: true,
            message: "信息填写有误",
            type: "error",
            during: 300
          });
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.form {
  background-color: #ffffff;
  // border: 1px solid greenyellow;
  height: 500px;
  overflow: scroll;
  position: relative;
  width: 95%;
}
.step {
  height: 300px;
  margin-top: 50px;
  position: relative;
  left: 0px;
  top: 0px;
}
</style>