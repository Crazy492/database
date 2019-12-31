<template>
  <div class="admission_pagination">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="9"
      @current-change="currentChange"
      :current-page.sync="currentPage"
    ></el-pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "admission_pagination",
  data() {
    return {
      currentPage: 0
    };
  },
  props: ["total"],
  computed: {
    ...mapState(["admissionBack2One"])
  },
  methods: {
    currentChange(val) {
      this.$emit("currentPage", val);
    }
  },
  mounted() {},
  watch: {
    admissionBack2One() {
      this.currentPage = 1;
    }
  }
};
</script>

<style>
.admission_pagination .el-pagination {
  margin-top: 20px !important;
}
</style>