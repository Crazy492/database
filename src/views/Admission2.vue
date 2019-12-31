<template>
  <div class="Admission2">
    <AdmissionSearch :loading="loading" @changLoading="changLoading" @search="search"></AdmissionSearch>
    <AdmissionTable :loading="loading" :tableData="tableData"></AdmissionTable>
    <AdmissionPagination :total="total" @currentPage="currentPage"></AdmissionPagination>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import AdmissionSearch from "./AdmissionSearch2.vue";
import AdmissionTable from "./AdmissionTable2";
import AdmissionPagination from "./AdmissionPagination2";
export default {
  name: "Admission2",
  data() {
    return {
      tableData: [],
      total: 0,
      loading: true,
      searchData: {
        school: "",
        college: "",
        speciality: ""
      }
    };
  },
  methods: {
    ...mapMutations(["makeAdmission2Back2One"]),
    changLoading(val) {
      this.loading = val;
    },
    search(val) {
      this.searchData = val;
      this.$axios.post("/admin/admissionShow?page=1&rows=9", val).then(res => {
        if (res.data.data.rows) {
          this.tableData = res.data.data.rows;
          this.total = res.data.data.total;
          this.makeAdmission2Back2One();
        }
      });
    },
    currentPage(val) {
      this.$axios
        .post(`/admin/admissionShow?page=${val}&rows=9`, this.searchData)
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
      .post("/admin/admissionShow?page=1&rows=9", this.searchData)
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

<style>
</style>