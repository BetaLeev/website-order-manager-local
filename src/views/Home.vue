<template>
  <div class="home">

    <table-search />
    <el-table :data="tableDataComputed.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      style="width: 100%">
      <el-table-column label="添加时间"
        width="240">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.localTime}}</span>
        </template>
      </el-table-column>
      <el-table-column label='标题'
        prop='title'></el-table-column>
      <el-table-column label="类型"
        width="120">
        <template slot-scope="scope">
          <el-popover trigger="hover"
            placement="top">
            <p>{{ scope.row.desc }}</p>
            <div slot="reference"
              class="name-wrapper">
              <el-tag size="medium">{{ scope.row.type }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="预付款"
        prop="prepayment"
        :width='120'>

      </el-table-column>
      <el-table-column label="交付日期"
        prop='deadLine'>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini"
            @click="handleDetail(scope.$index, scope.row)">查看详细</el-button>
          <el-button size="mini"
            type="danger"
            @click="handleAchieve(scope.$index, scope.row)">完成</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <p>
        <el-row>
          <p class="dialog-title"> 项目进度:</p>
          <el-progress :text-inside="true"
            :stroke-width="18"
            :percentage="10"></el-progress>
        </el-row>
        <br>
        <el-row>
          <div class="grid-content bg-purple-dark"> 难易程度: {{detail.diffculty}}</div>
        </el-row>
        <br>
        <div>
          技术栈: <li v-for='item in detail.technologic'
            :key='item'>
            {{item}}
          </li>
        </div>
        <br>
        <div>
          详细说明: {{detail.desc}}
        </div>
        <br>
        <!-- 
        <el-rate v-model="starRate"
          show-text>
        </el-rate> -->

        <span slot="footer"
          class="dialog-footer">
          <el-button type="primary"
            @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>

    <div class="block">
      <span class="demonstration"></span>
      <el-pagination @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5,10]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.tableDataComputed.length">
      </el-pagination>

    </div>
  </div>
</template>

<script>
import tableSearch from "@/components/search";
// @ is an alias to /src
export default {
  name: "home",
  beforeMount: function() {
    this.loading = true;
    if (this.$localStorage.get("tableData")) {
      this.tableData = JSON.parse(this.$localStorage.get("tableData"));
      this.tableData.forEach(item => {
        item.prepayment = "¥ " + item.prepayment;
      });
      this.loading = false;
    }
  },
  computed: {
    tableDataComputed: function() {
      let type = this.$store.state.searchType;
      let begin = this.$store.state.searchDateBegin;
      let end = this.$store.state.searchDateEnd;
      let filterTableData;
      if (type || (begin && end)) {
        if (type) {
          filterTableData = this.tableData.filter(item => item.type == type);
          if (begin && end) {
            filterTableData = filterTableData.filter(
              item =>
                Date.parse(item.localTime) >= begin &&
                Date.parse(item.localTime) <= end
            );
          }
        }
        if (begin && end) {
          filterTableData = this.tableData.filter(
            item =>
              Date.parse(item.localTime) >= begin &&
              Date.parse(item.localTime) <= end
          );
          if (type) {
            filterTableData = filterTableData.filter(item => item.type == type);
          }
        }
      } else {
        filterTableData = this.tableData;
      }

      return filterTableData;
    }
  },
  data() {
    return {
      a: 1,
      loading: true,
      // starRate: 1,
      currentPage: 1,
      pageSize: 5,
      tableData: [],
      dialogVisible: false,
      detail: ""
    };
  },
  components: {
    tableSearch
  },
  methods: {
    handleDetail: function(index, detail) {
      this.dialogVisible = true;
      this.detail = detail;
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    handleAchieve(index) {
      alert(index);
    },
    handleSearch() {
      let type = this.$store.state.searchType;
      console.log(type);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  max-width: 1000px;
  margin: 0 auto;
}
.block {
  text-align: center;
  margin-top: 20px;
}
</style>

