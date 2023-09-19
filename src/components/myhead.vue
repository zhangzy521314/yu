<template>
  <div class="yy1">
    <el-dropdown>
      <span class="bb">
        {{ token }}
      </span>
      <el-dropdown-menu slot="dropdown" class="bb">
        <div class="left" >
             
        </div>
        <p v-for="(item, index) in left" :key="index" @click="add(index)" class="bb">
        <el-dropdown-item >{{ item.name }}</el-dropdown-item>
        </p>

        <p @click="tc">
          <el-dropdown-item>退出登录</el-dropdown-item>
        </p>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["token","left"],
  methods: {
    tc() {
      this.$emit("tc");
      this.$router.push('/')
    },
    add(index){
      this.$emit('add',index)
    }
  },
  computed: {},
  watch: {},
  filters: {},
};
</script>

<style lang="scss" scoped>
.yy1{
  float: right;
  margin-right: 40px;
  color: #fff;
  margin-top: 20px;

}
.bb{
  color: #fff;
  line-height: 30px;

}
</style>