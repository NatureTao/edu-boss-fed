<template>
  <el-container>
    <!-- 侧边栏 -->
    <el-aside width="auto" style="background-color: rgb(238, 241, 246)">
      <!-- 3.使用组件 -->
      <app-aside :isCollapse="isCollapse" />
    </el-aside>
    <!-- 顶部 -->
    <el-container>
      <el-header>
        <app-header :isCollapse="isCollapse" :toggleCollapse="toggleCollapse" />
      </el-header>
      <!-- 主体 -->
      <el-main>
        <!-- <el-table :data="tableData">
                    <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table> -->

        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
import AppAside from './components/AppAside'
import AppHeader from './components/AppHeader'
export default {
  name: 'LayoutIndex',
  data(){
    return{
      isCollapse: false
    }
  },
  components:{
    AppAside,
    AppHeader
  },
  methods:{
    toggleCollapse(){
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>




<style lang="scss" scoped>
.el-container {
  height: 100vh;
}

.el-header {
  background-color: #e4e9fe;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>