<template>
  <div>
    <!-- 日期选择器 -->
    <el-date-picker
      v-model="queryParams.begintime"
      type="daterange"
      unlink-panels
      :start-placeholder="starDate"
      :end-placeholder="endDate"
      :shortcuts="shortcuts"
      value-format="YYYY-MM-DD"
      :disabled-date="disabledDate"
      @calendar-change="handleChange"
      @focus="handleFocus"
    />

    <!--按钮引入-->
    <!-- <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button> -->
  </div>
</template>

<script>

import { reactive, ref } from "vue";

export default ({
  name: "App",
  setup() {
    // 日期选择器默认开始时间-上周年月日
    let starDate = new Date();
    starDate.setTime(starDate.getTime() - 3600 * 1000 * 24 * 7);
    starDate = getNewTime(starDate);
    // 日期选择器默认结束时间-当前年月日
    let endDate = getNewTime(new Date());
    // 日期选择器快捷方式
    const shortcuts = [
      {
        text: "上周",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
          return [start, end];
        },
      },
      {
        text: "上月",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
          return [start, end];
        },
      },
      {
        text: "过去三个月",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
          return [start, end];
        },
      },
    ];
    // 查询条件
    const queryParams = reactive({
      begintime: null,
    });
    // 当前选择的开始日期
    const pickDay = ref(null);
    // 获取当前年月日的函数
    function getNewTime(date) {
      let y = date.getFullYear(); //年
      let m = date.getMonth() + 1; //月，月是从0开始的所以+1
      let d = date.getDate(); //日
      m = m < 10 ? "0" + m : m; //小于10补0
      d = d < 10 ? "0" + d : d; //小于10补0
      return y + "-" + m + "-" + d; //返回时间形式yyyy-mm-dd
    }
    // 时间选择器禁用范围
    const disabledDate = (time) => {
      if (!pickDay.value) {
        return false;
      } else {
        const con1 =
          new Date(pickDay.value).getTime() - 1 * 24 * 60 * 60 * 1000;
        const con2 =
          new Date(pickDay.value).getTime() + 30 * 24 * 60 * 60 * 1000;
        return time < con1 || time > con2;
      }
    };
    // 日期选择器选择时触发
    function handleChange(val) {
      const [pointDay] = val;
      pickDay.value = pointDay;
    }
    // 日期选择器获得焦点时触发
    function handleFocus() {
      pickDay.value = null;
    }
    return {
      starDate,
      endDate,
      shortcuts,
      queryParams,
      disabledDate,
      handleChange,
      handleFocus,
    };
  }
})


</script>
