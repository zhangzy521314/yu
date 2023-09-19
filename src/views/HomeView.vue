<template>
  <div>
    <dly @submitForm="submitForm"> </dly>
  </div>
</template>

<script>
import dly from "../components/dly.vue";
export default {
  data() {
    return {
      token: JSON.parse(localStorage.getItem("token")) || [],
    };
  },
  components: {
    dly,
  },
  methods: {
    submitForm(formName) {
      if(formName.name==''&&formName.password==''){
        alert('用户名不能为空')
      }else{
        localStorage.setItem("token", JSON.stringify(formName.name));
      this.$router.push("/about");
      }
      
    },
  },
  computed: {},
  watch: {
    token: {
      handler(val) {
        localStorage.setItem("token", JSON.stringify(val));
      },
      deep: true,
    },
  },
  filters: {},
};
</script>

<style lang="scss" scoped>
</style>
