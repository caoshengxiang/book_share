<template>
    <div class="header">
        <ul>
            <li v-for="item in menu">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>

        <div v-if="!user" class="sign">
            <a href="javascript:void(0)" @click="signIn">登录</a>
            <a href="javascript:void(0)" @click="registered">注册</a>
        </div>
        <div v-else="user" class="out">
            <a href="javascript:void(0)">欢迎，{{user.name}}</a>
            <a href="javascript:void(0)" @click="signOut">退出</a>
        </div>


        <el-dialog title="登陆" size="tiny" v-model="dialogFormVisible">
            <el-form :model="form" :rules="rules" ref="form" label-width="80px">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="resetForm('form')">重 置</el-button>
                <el-button type="primary" @click="submitForm('form')">登 陆</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                menu: [
                    {name: '我读', path: '/read'},
                    {name: '动态', path: '/dynamic'},
                    {name: '分类', path: '/category'},
                    {name: '纸书', path: '/paper'},
                    {name: '热榜', path: '/hot'},
                ],
                user: '',
                dialogFormVisible: false,
                form: {
                    name: '',
                    password: '',
                },
                rules: {
                    name: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                    ]
                },
                dialogFormVisible2: false,

            }
        },
        methods: {
            closeDialog() {
                this.dialogFormVisible = false;
                this.dialogFormVisible2 = false;
            },
            signIn() {
                this.dialogFormVisible = true;
            },
            registered() {
                this.dialogFormVisible2 = true;
            },
            signOut() {
                this.user = '';
                this.resetForm('form');
            },

            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // ajax
                        this.user = this.form;
                        this.closeDialog();

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        created() {

        }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>

    @import "../../styles/var";

    .header {
        height: 50px;
        min-width: 950px;
        background: $headerBg;
        color: $white;
        ul, li {
            list-style-type: none;
        }
        ul {
            height: 100%;
            display: flex;
            /*justify-content: center;*/
            align-items: center;
            float: left;
            li {
                margin: auto 20px;
            }
        }
        a {
            color: $white;
        }
        .sign, .out {
            float: right;
            height: 100%;
            display: flex;
            /*justify-content: center;*/
            align-items: center;
            a {
                margin: 0 10px;
            }
        }
    }
</style>