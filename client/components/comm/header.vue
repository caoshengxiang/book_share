<template>
    <div class="header">
        <ul>
            <li v-for="item in menu">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>

        <div v-if="!user.name" class="sign">
            <a href="javascript:void(0)" @click="signIn">登录</a>
            <a href="javascript:void(0)" @click="registered">注册</a>
        </div>
        <div v-else class="out">
            <a href="javascript:void(0)">欢迎，{{user.name}}</a>
            <a href="javascript:void(0)" @click="signOut">退出</a>
        </div>

        <!-- 登录 start -->
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
        <!-- 登录 end -->

        <!-- 注册 start -->
        <el-dialog title="注册" size="tiny" v-model="dialogFormVisible2">
            <el-form :model="form2" :rules="rules2" ref="form2" label-width="100px">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="form2.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form2.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="验证密码" prop="passwordRe">
                    <el-input v-model="form2.passwordRe" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="resetForm2('form2')">重 置</el-button>
                <el-button type="primary" @click="submitForm2('form2')">登 陆</el-button>
            </div>
        </el-dialog>
        <!-- 注册 end -->
    </div>
</template>

<script>
    import config from '../../utils/config'
    import utils from '../../utils/utils'
    import md5 from 'md5'
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
                form2: {
                    name: '',
                    password: '',
                    passwordRe: '',
                },
                rules2: {
                    name: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                    ],
                    passwordRe: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                    ],
                },
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
                utils.destoryLocalStorage('user');
                this.resetForm('form');
            },

            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // ajax
//                        this.user = this.form;
                        this.getUserInfo(0); // ajax
                        this.closeDialog();

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            getUserInfo(userId) {
                fetch('http://'+config.host+':'+config.port+'/account/'+userId).then((res)=>{
                    return res.json()
                }).then((data)=>{
                    utils.setLocalStorage('user', data);
                    this.user = utils.getLocalStorage('user');
                }).catch((e)=>{
                    console.log('获取用户数据错误')
                    console.error(e)

                    utils.setLocalStorage('user', this.form);
                    this.user = utils.getLocalStorage('user');
                })
            },

            submitForm2(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // ajax
//                        this.user = this.form;
                        if(this.form2.password === this.form2.passwordRe){
                            const md5 = md5(this.form2.password)
                            this.closeDialog();
                        } else {
                            this.$alert('两次密码输入不一致！')
                        }


                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm2(formName) {
                this.$refs[formName].resetFields();
            },
        },
        created() {
            this.user = utils.getLocalStorage('user')
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