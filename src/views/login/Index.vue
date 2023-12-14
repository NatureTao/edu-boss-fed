<template>
    <div id="bgc">
        <div class="login">
            <div class="left">
                <img src="@/assets/login.jpg" alt="">
            </div>
            <div class="right">
                <el-form ref="loginForm" :model="formData" label-width="80px" :rules="myRules">

                    <h1>Login</h1>
                    <el-form-item prop="phone">
                        <el-input type="text" class="inputItem" v-model="formData.phone" placeholder="手机号"></el-input>
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-input type="password" class="inputItem" v-model="formData.password"
                            placeholder="密码"></el-input>
                    </el-form-item>

                    <el-button class="btn" @click="onSubmit" :loading="isLoading">登录</el-button>



                </el-form>
            </div>

        </div>
    </div>

</template>

<script>
    import { login } from '@/api/user'
    export default {
        name: 'LoginIndex',
        data() {
            return {
                formData: {
                    phone: '18201288771',
                    password: '111111'
                },
                myRules: {
                    phone: [
                        { required: true, message: '你确定这里有东西吗?', trigger: 'blur' },
                        { pattern: /^1\d{10}$/, message: '你糊弄我呢?', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '你确定这里有东西吗?', trigger: 'blur' },
                        { min: 3, max: 16, message: '密码长度为3~16位', trigger: 'blur' }
                    ]
                },
                // 是否已经发送请求
                isLoading: false
            }
        },
        methods: {
            onSubmit() {
                //控制请求发送次数
                this.isLoading = true
                this.$refs.loginForm
                    .validate()
                    // 表达数据验证通过->发送请求
                    .then(() => login(this.formData))
                    .then((res) => {
                        const { data } = res
                        if (data.success) {
                            //成功
                            this.$message.success('登录成功')
                            //保存登录token
                            this.$store.commit('saveTokenInfo',data.content)
                            this.$router.push(this.$route.query.redirect || '/')
                            
                            // console.log(data.content)
                        } else {
                            //失败
    
                            this.$message.error('用户名或密码错误')
                        }
                        // console.log(res)
                    })
                    .catch(() => {
                        // 表达数据验证失败 Error处理
                        this.$message.error('验证失败')
                       

                    }).finally( ()=>{
                        //还原按钮可用状态
                        this.isLoading = false
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    #bgc {
        width: 100vw;
        height: 100vh;
        background: linear-gradient(to right, #f3b79b, #da7480);
    }

    /* 修改输入框默认样式 */
    ::v-deep .el-form-item__content {

        margin-left: 0 !important;

    }

    ::v-deep .el-input__inner {
        padding: 0 0px;
        border: none;
    }

    .login {
        width: 60%;
        height: 450px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);

        display: flex;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .left {
            width: 65%;

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .right {
            width: 35%;
            height: 100%;
            background-color: #fff;
            box-sizing: border-box;
            padding: 0 20px;

            h1 {
                text-align: center;
                color: #474d9f;
                padding-top: 45px;
                margin-top: 0;
            }
        }

        .inputItem {
            height: 44px;
            padding: 0;
            padding-left: 5px;
            border: none;
            background: none;
            outline: none;
            border-bottom: 3px solid #da7480;
            width: 100%;
            font-size: 18px;
            margin-top: 20px;
        }

        .btn {
            background: linear-gradient(to right, #f3b79b, #da7480);
            color: #474d9f;
            font-weight: bold;
            border: none;
            border-radius: 30px;
            height: 46px;
            width: 80%;
            font-size: 18px;
            display: block;
            margin: auto;
            margin-top: 30px;

        }


    }










    /* PC */
    @media screen and (min-width:960px) {
        .login {
            max-width: 950px;
            min-width: 750px;
        }
    }

    /* Ipad */
    @media screen and (max-width:960px) {
        .login {
            display: block;
            height: auto;

            .left,
            .right {
                width: 100%;
                margin-top: 0;
            }

            .left {
                height: 200px;
            }

            .right {
                padding: 2vw 2vw;

                h1 {
                    padding-top: 0;
                    margin-bottom: 1vw;
                }

                .inputItem,
                .btn {
                    margin-top: 2vw;
                }
            }
        }
    }

    /* Phone */
    @media screen and (max-width:750px) {
        .login {
            width: 85%;
        }
    }
</style>