<template>
    <div class="header">
        <ul>
            <li v-for="item in menu">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>

        <div v-if="!user.username" class="sign">
            <a href="javascript:void(0)" @click="signIn">登录</a>
            <a href="javascript:void(0)" @click="registered">注册</a>
        </div>
        <div v-else class="out">
            <a href="javascript:void(0)">欢迎，{{user.username}}</a>
            <a href="javascript:void(0)" @click="signOut">退出</a>
        </div>

        <!-- 登录 start -->
        <el-dialog title="登陆" size="tiny" v-model="dialogFormVisible">
            <el-form :model="form" :rules="rules" ref="form" label-width="80px">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username" auto-complete="off"></el-input>
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
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form2.username" auto-complete="off"></el-input>
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
    import $ from 'jquery'
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
                    username: '',
                    password: '',
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                    ]
                },
                dialogFormVisible2: false,
                form2: {
                    username: '',
                    password: '',
                    passwordRe: '',
                },
                rules2: {
                    username: [
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
                        this.userSign(); // ajax


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

                }).catch((e)=>{
                    console.log('获取用户数据错误')
                    console.error(e)
                })
            },

            submitForm2(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // ajax
//                        this.user = this.form;
                        if(this.form2.password === this.form2.passwordRe){
                            this.userReg();
                        } else {
                            this.$alert('两次密码输入不一致！')
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            userSign() {
//                fetch('/users/signin', {
//                    method: 'POST',
//                    headers: {
//                        'Accept': 'application/json',
//                        'Content-Type': 'application/x-www-form-urlencoded',
//                    },
//                    body: 'username='+this.form.username + '&password=' + md5(this.form.password)
//                }).then(json).then((data)=>{
//                    console.log(data)
//                    switch (data.s) {
//                        case 0:
//                            break;
//                        case 1:
//                            utils.setLocalStorage('user', data);
//                            this.user = utils.getLocalStorage('user');
//                            this.closeDialog();
//                            break;
//                        case 2:
//                            this.$alert("用户名或密码错误")
//                        default:
//                            console.log("其他返回")
//                    }
//                }).catch((err)=>{
//                    alert('登录错误')
//                })
                $.post('/users/signin', {username :this.form.username, password: md5(this.form.password)}, (data) => {
                    switch (data.s) {
                        case 0:
                            break;
                        case 1:
                            utils.setLocalStorage('user', data.d);
                            this.user = utils.getLocalStorage('user');
                            this.closeDialog();
                            break;
                        case 2:
                            this.$alert("用户名或密码错误")
                        default:
                            console.log("其他返回")
                    }
                })
            },
            userReg() {
                $.post('/users/reg', {
                    username: this.form2.username,
                    password: md5(this.form2.password)
                }, (data)=> {
                    console.log(data)
                    switch (data.s) {
                        case 0:
                            this.$alert("注册出现错误")
                            break;
                        case 1:
                            this.closeDialog();
                            this.resetForm2('form2')
                            this.signIn();
                            break;
                        case 2:
                            this.$alert("用户名存在")
                            break;
                        default:
                            console.log("其他返回");
                    }
                }, "json");
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