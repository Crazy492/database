import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import StuInfo from "../views/StuInfo.vue";
import Plan from "../views/Plan.vue";
import Result from "../views/Result.vue";
import AdminPage from "../views/AdminPage.vue";
import Admission from "../views/Admission.vue";
import Admission2 from "../views/Admission2.vue";
import Refuse from "../views/Refuse.vue";
import SchoolCount from "../views/SchoolCount.vue";
import SpecialityCount from "../views/SpecialityCount.vue";
import CollegeCount from "../views/CollegeCount.vue";
import TopStu from "../views/TopStu.vue";
import TopOne from "../views/TopOne.vue";
import School from "../views/School.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/adminPage",
    name: "admin",
    component: AdminPage,
    children: [
      {
        path: "admission",
        name: "Admission",
        component: Admission
      },
      {
        path: "admission2",
        name: "Admission2",
        component: Admission2
      },
      {
        path: "refuse",
        name: "Refuse",
        component: Refuse
      },
      {
        path: "schoolcount",
        name: "SchoolCount",
        component: SchoolCount
      },
      {
        path: "collegecount",
        name: "CollegeCount",
        component: CollegeCount
      },
      {
        path: "specialitycount",
        name: "SpecialityCount",
        component: SpecialityCount
      },
      {
        path: "topstu",
        name: "TopStu",
        component: TopStu
      },
      {
        path: "topone",
        name: "TopOne",
        component: TopOne
      },
      {
        path: "School",
        name: "School",
        component: School
      }
    ]
  },
  {
    path: "/studentPage",
    name: "studentPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/StudentPage.vue"),
    children: [
      {
        path: "stuInfo",
        name: "StuInfo",
        component: StuInfo
      },
      {
        path: "plan",
        name: "Plan",
        component: Plan
      },
      {
        path: "result",
        name: "Result",
        component: Result
      }
    ]
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
