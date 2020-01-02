<template>
  <el-container class="wrap" :style="{ height: height }">
    <keep-alive>
      <el-aside width="150px">
        <div class="block" @click="toStuInfo">
          <el-avatar shape="square" :size="60" :src="squareUrl"></el-avatar>
          <!-- <p class="sno">{{ this.$store.state.userId }}</p>
          <p class="stu">{{ this.$store.state.role }}</p>-->
          <p class="sno">{{ userId }}</p>
          <p class="stu">{{ role }}</p>
          <!-- <p class="sno">3117004527</p>
          <p class="stu">学生</p>-->
        </div>
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#dddddd"
          :router="true"
        >
          <el-menu-item index="/studentPage/stuInfo">
            <i class="el-icon-menu"></i>
            <span slot="title">志愿填报</span>
          </el-menu-item>
          <el-menu-item index="/studentPage/plan">
            <i class="el-icon-menu"></i>
            <span slot="title">招生计划</span>
          </el-menu-item>
          <el-menu-item index="/studentPage/result">
            <i class="el-icon-setting"></i>
            <span slot="title">录取结果</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
    </keep-alive>

    <el-container>
      <el-header style="display:flex;align-items:center;justify-content:center">
        Header
        <el-button style="position:absolute;right:50px" @click="exit">退出登录</el-button>
      </el-header>
      <el-main>
        <keep-alive exclude="result">
          <router-view />
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      height: "",
      userId: "",
      role: ""
    };
  },
  methods: {
    toStuInfo() {
      this.$router.push("/stuInfo");
    },
    exit() {
      this.$router.push("/");
    }
  },
  mounted() {
    this.role = sessionStorage.role;
    this.userId = sessionStorage.userId;
    this.height = document.documentElement.clientHeight + "px";
  }
};
</script>

<style scoped>
.wrap {
  width: 100%;
}
.block {
  padding-top: 80px;
  height: 150px;
  line-height: 150px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: space-around;
}
.block > p {
  margin: 0;
  width: 100%;
  height: 20px;
  line-height: 20px;
  color: rgb(34, 18, 18);
  font-size: 16px;
}
.sno {
  padding-top: 20px;
}
.stu {
  padding-bottom: 20px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  box-sizing: border-box;
  background-color: #dddddd;
  color: #333;
  text-align: center;
  line-height: 150px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
