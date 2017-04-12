<template>
    <div class="read-c-h">
        <img class="pic" src="../../../assets/logo.jpg" alt="">
        <div class="h-right">
            <h2>{{user.name}}的读书</h2>
            <p>
                <a href="#">读书主页</a>
                <a href="#">书评</a>
                <a href="#">笔记</a>
                <a href="#">在读</a>
                <a href="#">想读</a>
                <a href="#">读过</a>
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        name: '',
        props: {},
        data() {
            return {
                user: {
                    id: 1,
                    name: 'allen'
                }
            }
        },
        computed: {},
        methods: {},
        components: {},
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    .read-c-h{
        display: flex;
        margin-bottom: 30px;
        .pic{
            width: 50px;
            height: 50px;
        }
        .h-right{
            margin-left: 20px;
            h2{
                line-height: 26px;
            }
            a{
                margin-right: 8px;
                color: #3377aa;
                text-decoration: none;
            }
        }
    }
</style>