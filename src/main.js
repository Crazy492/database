import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userId: "",
    role: "",
    planBack2One: false,
    admissionBack2One: false,
    admission2Back2One: false
  },
  mutations: {
    userInfo(state, { userId, role }) {
      state.userId = userId;
      state.role = role;
    },
    makePlanBack2One(state) {
      state.planBack2One = !state.planBack2One;
    },
    makeAdmissionBack2One(state) {
      state.admissionBack2One = !state.admissionBack2One;
    },
    makeAdmission2Back2One(state) {
      state.admission2Back2One = !state.admission2Back2One;
    }
  }
});

Vue.use(ElementUI);
Axios.defaults.baseURL = "http://39.108.184.56:8200/";
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
