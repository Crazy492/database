<template>
  <div class="plan">
    <PlanSearch @search="search"></PlanSearch>
    <PlanTable :tableData="tableData"></PlanTable>
    <PlanPagination :total="total" @currentPage="currentPage"></PlanPagination>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import PlanSearch from "./PlanSearch.vue";
import PlanTable from "./PlanTable";
import PlanPagination from "./PlanPagination";
export default {
  name: "plan",
  data() {
    return {
      tableData: [],
      total: 0,
      searchData: {
        specialityName: "",
        schoolName: ""
      }
    };
  },
  computed: {
    ...mapState(["planBack2One"])
  },
  methods: {
    ...mapMutations(["makePlanBack2One"]),
    search(val) {
      this.searchData = val;
      this.$axios.post("/user/searchPlan?page=1&rows=9", val).then(res => {
        if (res.data.data.rows) {
          this.tableData = res.data.data.rows;
          this.total = res.data.data.total;
          this.makePlanBack2One();
        }
      });
    },
    currentPage(val) {
      this.$axios
        .post(`user/searchPlan?page=${val}&rows=9`, this.searchData)
        .then(res => {
          if (res.data.data.rows) {
            this.tableData = res.data.data.rows;
            this.total = res.data.data.total;
          }
        });
    }
  },
  mounted() {
    this.$axios
      .post("/user/searchPlan?page=1&rows=9", this.searchData)
      .then(res => {
        if (res.data.data.rows) {
          this.tableData = res.data.data.rows;
          this.total = res.data.data.total;
        }
      });
  },
  components: { PlanPagination, PlanTable, PlanSearch }
};
</script>

<style>
</style>