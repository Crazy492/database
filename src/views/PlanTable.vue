<template>
  <div class="plan_table">
    <el-table :data="tableData" stripe>
      <el-table-column prop="schoolName" label="学校" width="180"></el-table-column>
      <el-table-column prop="specialityName" label="专业" width="180"></el-table-column>
      <el-table-column prop="planNum" label="计划招生数"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "plan_table",
  props: ["tableData"]
};
</script>

<style scoped>
.plan_table {
  width: 45%;
  margin: 0 auto;
}
</style>