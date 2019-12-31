<template>
  <div class="school" style="width:100%;height:700px"></div>
</template>

<script>
import "echarts/lib/chart/pie";
import echarts from "echarts/lib/echarts";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
export default {
  mounted() {
    this.$axios.get("/admin/getTopStudentCount").then(res => {
      if (res.data.data) {
        let tops = res.data.data;

        let myChart = echarts.init(document.querySelector(".school"));
        let option = {
          backgroundColor: "#2c343c",

          title: {
            text: `Top1% 总人数: ${this.countNum(tops)}`,
            left: "center",
            top: 20,
            textStyle: {
              color: "#ccc"
            }
          },

          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },

          visualMap: {
            show: false,
            min: 0,
            max: 20,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series: [
            {
              name: "Top1% 统计",
              type: "pie",
              radius: "55%",
              center: ["50%", "50%"],
              data: tops
                .map(item => ({ value: item.count, name: item.speciality }))
                .sort(function(a, b) {
                  return a.value - b.value;
                }),
              roseType: "radius",
              label: {
                normal: {
                  textStyle: {
                    color: "rgba(255, 255, 255, 0.3)"
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: "rgba(255, 255, 255, 0.3)"
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },

              animationType: "scale",
              animationEasing: "elasticOut",
              animationDelay: function() {
                return Math.random() * 200;
              }
            }
          ]
        };
        myChart.setOption(option);
      }
    });
  },
  methods: {
    countNum(tops) {
      let num = tops.map(item => item.count).reduce((cur, per) => cur + per);
      return num;
    }
  }
};
</script>

<style>
</style>