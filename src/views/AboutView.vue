<template>
  <div>
    <el-container>
      <el-header class="yy">
        <myhead :token="token" @tc="tc" :left="left" @add="add"></myhead>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <myleft :left="left" class="mm">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-submenu index="1">
                <template slot="title">
                  <span>财务报表></span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1" v-show="flag">销售量</el-menu-item>
                  <el-menu-item index="1-2" v-show="flag1">现存货</el-menu-item>
                  <el-menu-item index="1-3" v-show="flag2">进货价</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="3">
                <span slot="title">角色分配</span>
              </el-menu-item>
            </el-menu>
          </myleft>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import myhead from "../components/myhead.vue";
import myleft from "../components/myleft.vue";

export default {
  data() {
    return {
      token: JSON.parse(localStorage.getItem("token")) || [],
      left: [],
      flag: true,
      flag1: true,
      flag2: true,
    };
  },
  components: {
    myhead,
    myleft,
  },
  methods: {
    tc() {
      localStorage.removeItem("token");
    },
    add(index) {
      if (index == 0) {
        console.log(index);
        this.flag = true;
        this.flag1 = true;
        this.flag2 = true;
      } else {
        if (index == 1) {
          this.flag2 = false;
        } else {
          if (index == 2) {
            this.flag1 = false;
            this.flag2=false
          }
        }
      }
    },
  },
  created() {
    // 右侧菜单
    this.$axios.get("/roles.json").then((res) => {
      console.log(res.data);
      this.left = res.data;
    });
    
  },
  computed: {},
  watch: {},
  filters: {},
};
</script>

<style lang="scss" scoped>
.yy {
  width: 100%;
  height: 60px;
  background-color: #545454;
  color: red;
}
.el-aside {
  height: 510px;
}
.mm {
  height: 510px;
}
.el-menu-vertical-demo{
  height: 510px;
  
}
</style>