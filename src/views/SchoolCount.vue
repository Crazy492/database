<template>
  <div class="schoolCount">
    <el-table :data="tableData" stripe>
      <el-table-column prop="school" label="学校"></el-table-column>
      <el-table-column prop="topRank" label="最高排位"></el-table-column>
      <el-table-column prop="topScore" label="最高分"></el-table-column>
      <el-table-column prop="underRank" label="最低排位"></el-table-column>
      <el-table-column prop="underScore" label="最低分"></el-table-column>
      <el-table-column prop="avgScore" label="平均分"></el-table-column>
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
    this.$axios.get("/admin/getSchoolCount?page=1&rows=10").then(res => {
      if (res.data.data) {
        this.tableData = res.data.data.rows;
        this.total = res.data.data.total;
      }
    });
  },
  methods: {
    currentChange(val) {
      this.$axios.get(`/admin/getSchoolCount?page=${val}&rows=10`).then(res => {
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
.schoolCount .el-pagination {
  margin-top: 25px;
}
</style>