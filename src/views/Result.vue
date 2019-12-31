<template>
  <div class="result"></div>
</template>

<script>
export default {
  name: "result",
  data() {
    return {};
  },
  mounted() {
    this.$axios
      .get(`/user/getResult?userId=${sessionStorage.userId}`)
      .then(res => {
        this.$alert(res.data.data, {
          confirmButtonText: "确定",
          callback: action => {
            this.$message({
              type: "info",
              message: `action: ${action}`
            });
          }
        });
      });
  }
};
</script>

<style>
/* .result .el-message-box__container .el-message-box__message > p {
  font-size: 16px;
  font-weight: bold;
} */
</style>