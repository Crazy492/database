<template>
  <div class="plan_search">
    <el-form :inline="true" :model="search" class="demo-form-inline">
      <el-form-item label="学校">
        <el-select v-model="search.schoolName" placeholder="学校" clearable>
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专业">
        <el-select v-model="search.specialityName" placeholder="专业" clearable>
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "plan_search",
  data() {
    return {
      search: {},
      options1: [],
      options2: []
    };
  },
  methods: {
    onSubmit() {
      this.$emit("search", this.search);
      // this.$axios
      //   .post(`/user/searchPlan?page=1&rows=10`, {
      //     schoolName: this.search.school,
      //     specialityName: this.search.speciality
      //   })
      //   .then(res => {
      //     console.log(res.data.data);
      //   });
      // console.log(this.search);
    }
  },
  created() {
    this.$axios.get("/user/findSchool").then(res => {
      if (res.data.data) {
        res.data.data.forEach(val => {
          this.options1.push({
            value: val,
            label: val
          });
        });
      }
    });
    this.$axios.post(`/user/findSpeciality`).then(res => {
      if (res.data.data) {
        res.data.data.forEach(val => {
          this.options2.push({
            value: val,
            label: val
          });
        });
      }
    });
  },
  watch: {
    search: {
      deep: true,
      handler(search) {
        if (search.schoolName != undefined) {
          this.options2 = [];
          this.$axios
            .post(`/user/findSpeciality?${search.schoolName}`)
            .then(res => {
              if (res.data.data) {
                res.data.data.forEach(val => {
                  this.options2.push({
                    value: val,
                    label: val
                  });
                });
              }
            });
        } else {
          this.options2 = [];
          this.$axios.post(`/user/findSpeciality`).then(res => {
            if (res.data.data) {
              res.data.data.forEach(val => {
                this.options2.push({
                  value: val,
                  label: val
                });
              });
            }
          });
        }
      }
    }
  }
};
</script>

<style scoped>
</style>