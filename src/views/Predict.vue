<template>
  <div class="predict">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%; margin-top:150px"
      :header-cell-style="{height:70}"
    >
      <el-table-column prop="studentName" label="姓名"></el-table-column>
      <el-table-column prop="studentCity" label="生源地"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <el-table-column prop="totalScore" label="总分"></el-table-column>
      <el-table-column prop="mathScore" label="数学"></el-table-column>
      <el-table-column prop="englishScore" label="英语"></el-table-column>
      <el-table-column prop="chineseScore" label="语文"></el-table-column>
      <el-table-column prop="combinationScore" label="综合科目"></el-table-column>
      <el-table-column prop="combinationKind" label="考生类型"></el-table-column>
      <el-table-column prop="rank" label="排名"></el-table-column>
    </el-table>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>志愿填写</span>
        <el-button @click="submit" style="float:right">预测</el-button>
      </div>
      <el-form :inline="true" :model="formLabelAlign">
        <div>
          <el-form-item label="第一志愿">
            <el-select v-model="formLabelAlign.s1" filterable placeholder="第一志愿学校" clearable>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业1">
            <el-select v-model="formLabelAlign.s1zy1" filterable placeholder="专业1" clearable>
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业2">
            <el-select v-model="formLabelAlign.s1zy2" filterable placeholder="专业2" clearable>
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业3">
            <el-select v-model="formLabelAlign.s1zy3" filterable placeholder="专业3" clearable>
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业4">
            <el-select v-model="formLabelAlign.s1zy4" filterable placeholder="专业4" clearable>
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业5">
            <el-select v-model="formLabelAlign.s1zy5" filterable placeholder="专业5" clearable>
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业6">
            <el-select v-model="formLabelAlign.s1zy6" filterable placeholder="专业6" clearable>
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否调剂">
            <el-select v-model="formLabelAlign.s1tj" filterable placeholder="是否调剂" clearable>
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <!-- <el-button @click="suject">建议</el-button> -->
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      formLabelAlign: {},
      options3: [],
      options: [{ value: "广东供液大学", label: "广东供液大学" }],
      options2: [
        { value: "是", label: "是" },
        { value: "否", label: "否" }
      ],
      rank: 0
    };
  },
  methods: {
    submit() {
      this.$axios
        .post(`/user/recommendSpeciality?userId=${sessionStorage.userId}`, {
          school: this.formLabelAlign.s1,
          zy1: this.formLabelAlign.s1zy1,
          zy2: this.formLabelAlign.s1zy2,
          zy3: this.formLabelAlign.s1zy3,
          zy4: this.formLabelAlign.s1zy4,
          zy5: this.formLabelAlign.s1zy5,
          zy6: this.formLabelAlign.s1zy6,
          tj: this.formLabelAlign.s1tj,
          rank: this.rank
        })
        .then(res => {
          this.$alert(
            res.data.data.message,
            `预测专业： ${res.data.data.predict}`,
            {
              confirmButtonText: "确定",
              callback: action => {
                this.$message({
                  type: "info",
                  message: `action: ${action}`
                });
              }
            }
          );
        });
    }
  },
  created() {
    this.$axios
      // .post(`/user/GetStuInfo?userId=${this.$store.state.userInfo}`)
      .post(`/user/GetStuInfo?userId=${sessionStorage.userId}`)
      .then(res => {
        this.tableData.push(res.data.data);
        this.rank = res.data.data.rank;
      });

    this.$axios.get(`/user/getMajor`).then(res => {
      if (res.data.data) {
        res.data.data.forEach(val => {
          this.options3.push({
            value: val,
            label: val
          });
        });
      }
    });
  },
  watch: {
    formLabelAlign: {
      deep: true,
      handler() {
        this.$axios.get(`/user/getMajor`).then(res => {
          let arr = res.data.data;
          this.options3 = [];
          let index = [];
          let temp = [
            this.formLabelAlign.s1zy1,
            this.formLabelAlign.s1zy2,
            this.formLabelAlign.s1zy3,
            this.formLabelAlign.s1zy4,
            this.formLabelAlign.s1zy5,
            this.formLabelAlign.s1zy6
          ];
          for (let [idx, val] of arr.entries()) {
            temp.forEach(zy => {
              if (zy == val) {
                index.push(idx);
              }
            });
          }
          for (let i = index.length - 1; i >= 0; i--) {
            arr.splice(index[i], 1);
          }
          arr.forEach(val => {
            this.options3.push({
              value: val,
              label: val
            });
          });
        });
      }
    }
  }
};
</script>

<style scoped>
#text {
  text-align: center !important;
  font-size: 20px;
}
.el-main {
  line-height: 35px !important;
  text-align: center !important;
}
.el-table td,
.el-table th {
  text-align: center !important;
}
.box-card {
  margin-top: 50px;
}
.el-form .el-form-item {
  width: 170px !important;
}
</style>