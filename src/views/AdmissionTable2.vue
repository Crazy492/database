<template>
  <div class="admission_table">
    <el-table v-loading="loading" :data="tableData" stripe>
      <el-table-column prop="school" label="学校"></el-table-column>
      <el-table-column prop="college" label="学院"></el-table-column>
      <el-table-column prop="speciality" label="专业"></el-table-column>
      <el-table-column prop="name" label="名字"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <!-- <el-table-column prop="city" label="城市"></el-table-column> -->
      <el-table-column prop="score" label="分数"></el-table-column>
      <el-table-column prop="rank" label="排位"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "admission_table2",
  props: ["tableData", "loading"]
};
</script>

<style scoped>
.admission_table {
  width: 80%;
  margin: 0 auto;
}
</style>