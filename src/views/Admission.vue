<template>
  <div class="Admission">
    <AdmissionSearch :loading="loading" @changLoading="changLoading" @search="search"></AdmissionSearch>
    <AdmissionTable :loading="loading" :tableData="tableData"></AdmissionTable>
    <AdmissionPagination :total="total" @currentPage="currentPage"></AdmissionPagination>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import AdmissionSearch from "./AdmissionSearch.vue";
import AdmissionTable from "./AdmissionTable";
import AdmissionPagination from "./AdmissionPagination";
export default {
  name: "Admission",
  data() {
    return {
      tableData: [],
      total: 0,
      loading: true,
      searchData: {
        school: "",
        college: "",
        speciality: "",
        status: ""
      }
    };
  },
  methods: {
    ...mapMutations(["makeAdmissionBack2One"]),
    changLoading(val) {
      this.loading = val;
    },
    search(val) {
      this.searchData = val;
      this.$axios.post("/admin/enrollInitShow?page=1&rows=9", val).then(res => {
        if (res.data.data.rows) {
          this.tableData = res.data.data.rows;
          this.total = res.data.data.total;
          this.makeAdmissionBack2One();
        }
      });
    },
    currentPage(val) {
      this.$axios
        .post(`/admin/enrollInitShow?page=${val}&rows=9`, this.searchData)
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
      .post("/admin/enrollInitShow?page=1&rows=9", this.searchData)
      .then(res => {
        if (res.data.data.rows) {
          this.tableData = res.data.data.rows;
          this.total = res.data.data.total;
          this.loading = false;
        }
      });
  },
  components: { AdmissionPagination, AdmissionTable, AdmissionSearch }
};
</script>

<style scoped>
</style>