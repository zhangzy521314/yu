<template>
  <div>
    <div class="dl">
      <div class="tt">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <div class="nn">
            <img src="../assets/logo.png" alt="" />
          </div>
          <el-form-item label="用户名" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="ruleForm.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <!-- 登录 -->
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(ruleForm){
        console.log(this.ruleForm);
        this.$emit('submitForm',this.ruleForm)
    }
  },
  computed: {},
  watch: {},
  filters: {},
};
</script>

<style lang="scss" scoped>
.dl {
  width: 100%;
  height: 100vh;
  background-color: #9ff9d3;
  margin: 0 auto;
  text-align: center;
}
.tt {
  width: 600px;
  height: 300px;
  padding-top: 150px;
  box-sizing: border-box;
  margin-left: 300px;
}
.el-form-item {
  width: 80%;
}
.el-form {
  width: 100%;
  background-color: #fff;
}
.nn {
  width: 150px;
  height: 130px;
  border-radius: 80px;
  border: 5px solid #ccc;
  text-align: center;
  margin: 0 auto;
}
img {
  width: 150px;
  height: 130px;
  border-radius: 80px;
}
</style>