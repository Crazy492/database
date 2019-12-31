<template>
  <div class="plan_pagination">
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
  name: "plan_pagination",
  data() {
    return {
      currentPage: 0
    };
  },
  props: ["total"],
  computed: {
    ...mapState(["planBack2One"])
  },
  methods: {
    currentChange(val) {
      this.$emit("currentPage", val);
    }
  },
  mounted() {},
  watch: {
    planBack2One() {
      this.currentPage = 1;
    }
  }
};
</script>

<style>
.plan_pagination .el-pagination {
  margin-top: 20px !important;
}
</style>