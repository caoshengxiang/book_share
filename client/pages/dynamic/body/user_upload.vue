<template>
    <div>
        <div class="u-info">
            <img src="../../../assets/user.jpg" alt="" class="u-h">
            <div class="u-con">
                <h3>allen</h3>
                <p>2017-04-07 加入</p>
            </div>
        </div>

        <el-button>我有一本好书</el-button>
    </div>
</template>
<script>

    export default {
        name: '',
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
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