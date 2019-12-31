<template>
  <div class="admission_search">
    <el-form :inline="true" :model="search" class="demo-form-inline">
      <el-form-item label="学校">
        <el-select v-model="search.school" placeholder="学校" size="small" clearable>
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学院">
        <el-select v-model="search.college" placeholder="学院" size="small" clearable>
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专业">
        <el-select v-model="search.speciality" placeholder="专业" size="small" clearable>
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="search.status" placeholder="状态" size="small" clearable>
          <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="small">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="first" size="small">初次录取</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="second" size="small">调剂录取</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="back" size="small">回退</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "admission_search",
  data() {
    return {
      search: {
        school: "",
        speciality: "",
        college: "",
        status: ""
      },
      options1: [],
      options2: [],
      options3: [],
      options4: [
        {
          value: "拟录取",
          label: "拟录取"
        },
        {
          value: "调剂",
          label: "调剂"
        },
        {
          value: "退档",
          label: "退档"
        }
      ],
      isFirst: false,
      isSecond: false
    };
  },
  props: ["loading"],
  methods: {
    onSubmit() {
      this.$emit("search", this.search);
    },
    first() {
      this.$emit("changLoading", true);
      this.$axios
        .get("/admin/enrollInit")
        .then(() => {
          this.isFirst = true;
        })
        .then(() => {
          this.$emit("search", this.search);
          this.$emit("changLoading", false);
        });
    },
    second() {
      this.$emit("changLoading", true);
      this.$axios
        .get("/admin/enrollAdjust")
        .then(() => {
          // this.$router.push("/adminpage/adjust");
          this.isSecond = true;
        })
        .then(() => {
          this.$emit("changLoading", false);
          this.$router.push("/adminpage/admission2");
        });
    },
    back() {
      this.$axios.get("/admin/rollback").then(() => {
        this.$emit("search", this.search);
      });
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
    this.$axios.post(`/user/findCollege`).then(res => {
      if (res.data.data) {
        res.data.data.forEach(val => {
          this.options3.push({
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