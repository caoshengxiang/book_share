<template>
    <div>
        <div class="u-info">
            <img src="../../../assets/user.jpg" alt="" class="u-h">
            <div class="u-con">
                <h3>allen</h3>
                <p>2017-04-07 加入</p>
            </div>
        </div>

        <el-button @click.native="addBook">我有一本好书</el-button>
    </div>
</template>
<script>
    import utils from '../../../utils/utils'
    export default {
        name: 'userUpload',
        props: {},
        data() {
            return {
                user: '',
            }
        },
        computed: {},
        methods: {
            addBook() {
                this.user = utils.getLocalStorage('user');
                if (!this.user.username) {
                    this.$message({
                        type: 'warning',
                        message: '你还没有登录哦！！！'
                    })
                } else {
                    this.$router.push('/dynamic_add');
                }
            }
        },
        components: {},

    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    .u-info {
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #f5e9db;
        .u-h{
            float: left;
            width: 48px;
            height: 48px;
        }
        .u-con{
            float: left;
            color: #666;
            margin-left: 10px;
            h3{
                font-size: 20px;
            }
            p{
                font-size: 12px;
            }
        }
        &:after{
            content: '';
            display: block;
            clear: both;
        }
    }
</style>