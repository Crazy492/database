<template>
  <div class="refuse">
    <el-table :data="tableData" stripe>
      <el-table-column prop="studentName" label="姓名"></el-table-column>
      <el-table-column prop="studentCity" label="城市"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <el-table-column prop="totalScore" label="总分"></el-table-column>
      <el-table-column prop="combinationKind" label="类型"></el-table-column>
      <el-table-column prop="rank" label="排位"></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="10"
      @current-change="currentChange"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      total: 0
    };
  },
  created() {
    this.$axios.get(`/admin/getRefuseList?page=1&rows=10`).then(res => {
      if (res.data.data) {
        this.tableData = res.data.data.rows;
        this.total = res.data.data.total;
      }
    });
  },
  methods: {
    currentChange(val) {
      this.$axios.get(`/admin/getRefuseList?page=${val}&rows=10`).then(res => {
        if (res.data.data) {
          this.tableData = res.data.data.rows;
          this.total = res.data.data.total;
        }
      });
    }
  }
};
</script>

<style>
.refuse .el-pagination {
  margin-top: 50px;
}
</style>