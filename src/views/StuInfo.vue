<template>
  <div class="main">
    <el-table :data="tableData" stripe style="width: 100%" :header-cell-style="{height:70}">
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
        <el-button @click="submit" style="float:right" :disabled="already|| isNull">提交志愿</el-button>
      </div>
      <el-form :inline="true" :model="formLabelAlign" :disabled="already ">
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

        <div>
          <el-form-item label="第二志愿">
            <el-select v-model="formLabelAlign.s2" filterable placeholder="第二志愿学校" clearable>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业1">
            <el-select v-model="formLabelAlign.s2zy1" filterable placeholder="专业1" clearable>
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业2">
            <el-select v-model="formLabelAlign.s2zy2" filterable placeholder="专业2" clearable>
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业3">
            <el-select v-model="formLabelAlign.s2zy3" filterable placeholder="专业3" clearable>
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业4">
            <el-select v-model="formLabelAlign.s2zy4" filterable placeholder="专业4" clearable>
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业5">
            <el-select v-model="formLabelAlign.s2zy5" filterable placeholder="专业5" clearable>
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业6">
            <el-select v-model="formLabelAlign.s2zy6" filterable placeholder="专业6" clearable>
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否调剂">
            <el-select v-model="formLabelAlign.s2tj" filterable placeholder="是否调剂" clearable>
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </div>

        <div>
          <el-form-item label="第三志愿">
            <el-select v-model="formLabelAlign.s3" filterable placeholder="第三志愿学校" clearable>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业1">
            <el-select v-model="formLabelAlign.s3zy1" filterable placeholder="专业1" clearable>
              <el-option
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业2">
            <el-select v-model="formLabelAlign.s3zy2" filterable placeholder="专业2" clearable>
              <el-option
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业3">
            <el-select v-model="formLabelAlign.s3zy3" filterable placeholder="专业3" clearable>
              <el-option
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业4">
            <el-select v-model="formLabelAlign.s3zy4" filterable placeholder="专业4" clearable>
              <el-option
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业5">
            <el-select v-model="formLabelAlign.s3zy5" filterable placeholder="专业5" clearable>
              <el-option
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业6">
            <el-select v-model="formLabelAlign.s3zy6" filterable placeholder="专业6" clearable>
              <el-option
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否调剂">
            <el-select v-model="formLabelAlign.s3tj" filterable placeholder="是否调剂" clearable>
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
    </el-card>

    <!-- <el-dialog title="提示" :visible.sync="dialog" width="10%" center>
      <span id="text">请填写是否接受调剂</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialog = false">确 定</el-button>
      </span>
    </el-dialog>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      formLabelAlign: {},
      // dialog: false,
      options2: [
        {
          value: "是",
          label: "是"
        },
        {
          value: "否",
          label: "否"
        }
      ],
      options: [],
      // 第一志愿的
      options3: [],
      // 第二志愿的
      options4: [],
      // 第三志愿的
      options5: [],
      already: false,
      isNull: true
    };
  },
  created() {
    this.$axios
      // .post(`/user/GetStuInfo?userId=${this.$store.state.userInfo}`)
      .post(`/user/GetStuInfo?userId=${sessionStorage.userId}`)
      .then(res => {
        this.tableData.push(res.data.data);
      });

    this.$axios.get("/user/findSchool").then(res => {
      if (res.data.data) {
        res.data.data.forEach(val => {
          this.options.push({
            value: val,
            label: val
          });
        });
      }
    });
    this.$axios
      .get(`/user/getPreferenceInfo?userId=${sessionStorage.userId}`)
      .then(res => {
        if (!this.isAllNull(res.data.data)) {
          this.formLabelAlign = { ...res.data.data };
          this.already = true;
        }
      });
  },
  watch: {
    formLabelAlign: {
      deep: true,
      handler(val) {
        let ops = [];

        if (val.s1 && val.s1 != null) {
          this.isNull = false;
          ops.push(val.s1);
          this.options3 = [];
          this.$axios.post(`/user/findSpeciality?${val.s1}`).then(res => {
            if (res.data.data) {
              let arr = res.data.data;
              let index = [];
              let temp = [
                val.s1zy1,
                val.s1zy2,
                val.s1zy3,
                val.s1zy4,
                val.s1zy5,
                val.s1zy6
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
            }
          });
        }

        if (val.s2 && val.s2 != null) {
          this.isNull = false;
          ops.push(val.s2);
          this.options4 = [];

          this.$axios.post(`/user/findSpeciality?${val.s2}`).then(res => {
            if (res.data.data) {
              let arr = res.data.data;
              let index = [];
              let temp = [
                val.s2zy1,
                val.s2zy2,
                val.s2zy3,
                val.s2zy4,
                val.s2zy5,
                val.s2zy6
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
                this.options4.push({
                  value: val,
                  label: val
                });
              });
            }
          });
        }

        if (val.s3 && val.s3 != null) {
          this.isNull = false;
          ops.push(val.s3);
          this.options5 = [];

          this.$axios.post(`/user/findSpeciality?${val.s3}`).then(res => {
            if (res.data.data) {
              let arr = res.data.data;
              let index = [];
              let temp = [
                val.s3zy1,
                val.s3zy2,
                val.s3zy3,
                val.s3zy4,
                val.s3zy5,
                val.s3zy6
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
                this.options5.push({
                  value: val,
                  label: val
                });
              });
            }
          });
        }

        this.options = this.options
          .map(o => o.value)
          .filter(option => {
            for (let op of ops) {
              if (op == option) {
                return false;
              }
            }
            return true;
          })
          .map(item => ({ value: item, label: item }));
      }
    }
  },
  methods: {
    isAllNull(obj) {
      return Object.values(obj).every(i => i == null);
    },
    suject() {
      this.$axios.post(
        `/user/recommendSpeciality?userId=${sessionStorage.userId}`,
        {
          school: this.formLabelAlign.s1,
          zy1: this.formLabelAlign.s1zy1,
          zy2: this.formLabelAlign.s1zy2,
          zy3: this.formLabelAlign.s1zy3,
          zy4: this.formLabelAlign.s1zy4,
          zy5: this.formLabelAlign.s1zy5,
          zy6: this.formLabelAlign.s1zy6,
          tj: this.formLabelAlign.s1tj
        }
      );
    },
    submit() {
      if (
        (this.formLabelAlign.s1 != undefined &&
          this.formLabelAlign.s1tj == undefined) ||
        (this.formLabelAlign.s2 != undefined &&
          this.formLabelAlign.s2tj == undefined) ||
        (this.formLabelAlign.s3 != undefined &&
          this.formLabelAlign.s3tj == undefined)
      ) {
        // this.dialog = true;

        this.$confirm("请输入是否接受调剂", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
      } else {
        // let option = {
        //   s1: this.s1,
        //   s1zy1: this.s1zy1,
        //   s1zy2: this.s1zy2,
        //   s1zy3: this.s1zy3,
        //   s1zy4: this.s1zy4,
        //   s1zy5: this.s1zy5,
        //   s1zy6: this.s1zy6,
        //   s1tj: this.s1tj,
        //   s2: this.s2,
        //   s2zy1: this.s2zy1,
        //   s2zy2: this.s2zy2,
        //   s2zy3: this.s2zy3,
        //   s2zy4: this.s2zy4,
        //   s2zy5: this.s2zy5,
        //   s2zy6: this.s2zy6,
        //   s2tj: this.s2tj,
        //   s3: this.s3,
        //   s3zy1: this.s3zy1,
        //   s3zy2: this.s3zy2,
        //   s3zy3: this.s3zy3,
        //   s3zy4: this.s3zy4,
        //   s3zy5: this.s3zy5,
        //   s3zy6: this.s3zy6,
        //   s3tj: this.s3tj
        // };
        this.$confirm("填报志愿只有一次机会,是否确认所填信息无误?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$axios.post(
              `/user/fillApplication?userId=${sessionStorage.userId}`,
              this.formLabelAlign
            );
            this.already = true;
            this.$message({
              type: "success",
              message: "填报成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消"
            });
          });
      }
    }
  }
};
</script>

<style scoped>
.main {
  height: 500px;
  width: 100%;
}
.el-form div {
  height: 100px;
}
.el-form .el-form-item {
  width: 150px;
  height: 50px;
  line-height: 50px;
}
.block {
  margin-top: 100px;
}
</style>

<style>
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
</style>