<template>
    <div class="app-header">
        <!-- 按钮 -->
        <i :class="iconClassName" @click="toggleCollapse"></i>
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 下拉菜单 -->
        <el-dropdown>
            <span class="el-dropdown-link">
                <el-avatar :size="32" :src="userInfo.portrait"></el-avatar>
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>{{userInfo.userName}}</el-dropdown-item>
              <el-dropdown-item divided @click.native="handleLogout">注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

    </div>
</template>

<script>
    
    import { getUserInfo,logout } from '@/api/user'

    export default {
        name: 'AppHeader',
        data(){
            return {
                userInfo: {}
            }
        },
        props: {
            isCollapse: {
                type: Boolean,
                default: false
            },
            toggleCollapse: {
                type: Function,
                required: true

            }

        },
        methods:{
            handleLogout(){
                this.$confirm('确定要注销吗?','注销提示信息',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() =>{
                    //服务器发送注销请求
                    logout()
                })
                .then( () => {
                    //清空本地登录信息
                    this.$store.commit('saveTokenInfo',null)
                    this.$message.success('注销成功!')
                    this.$router.push('/login')
                }).catch( ()=>{

                })

            }
        },
        computed: {
            iconClassName() {
                return this.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
            }
        },
        created(){
            getUserInfo().then(res => this.userInfo = res.data.content)
        }
    }
</script>

<style lang="scss" scoped>
    .app-header {
        display: flex;
        align-items: center;
        height: 100%;
        .el-breadcrumb{
            margin-left: 10px;
        }
        .el-dropdown{
            margin-left: auto;
        }
        .el-dropdown-link{
            display: flex;
            align-items: center;
            
        }
    }
    
</style>