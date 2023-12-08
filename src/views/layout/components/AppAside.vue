<template>

    <el-menu router unique-opened :collapse="isCollapse">
        <a href="/" class="logo">
            <img src="@/assets/logo.gif" alt="">
            <h1>NatureTao</h1>

        </a>
        <el-submenu index="1">

            <template slot="title"><i class="el-icon-lock"></i><span>权限管理</span></template>

            <el-menu-item index="/roles"><i class="el-icon-setting"></i>角色列表</el-menu-item>
            <el-menu-item index="/menus"><i class="el-icon-setting"></i>菜单列表</el-menu-item>
            <el-menu-item index="/resources"><i class="el-icon-setting"></i>资源列表</el-menu-item>

        </el-submenu>


        <el-menu-item index="/courses"><i class="el-icon-video-camera"></i><span>课程管理</span></el-menu-item>
        <el-menu-item index="/users"><i class="el-icon-user"></i><span>用户管理</span></el-menu-item>


        <el-submenu index="2">
            <template slot="title"><i class="el-icon-postcard"></i><span>广告管理</span></template>

            <el-menu-item index="/advertise"><i class="el-icon-setting"></i>广告列表</el-menu-item>
            <el-menu-item index="/advertise-space"><i class="el-icon-setting"></i>广告位列表</el-menu-item>

        </el-submenu>


    </el-menu>



</template>

<script>
    export default {
        name: 'AppAside',
        data() {
            return {

            }
        },
        props: {
            isCollapse: {
                type: Boolean,
                default: false

            }
        }
    }
</script>

<style lang="scss" scoped>
    /* 设置logo样式 */
    .logo {
        height: 75px;
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: black;

        img {
            width: 70px;
            height: 70px;
        }
    }

    /* 侧边栏样式 */
    .el-menu {
        height: 100%;
        width: 200px;
    }

    .el-menu--collapse.el-menu {
        width: 64px;

        h1 {
            display: none;
        }
    }
</style>