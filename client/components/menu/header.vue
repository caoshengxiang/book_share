<template>
    <div class="header">
        <ul>
            <li v-for="item in menu">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>

        <div v-if="!user" class="sign">
            <a href="javascript:void(0)">登录</a>
            <a href="javascript:void(0)">注册</a>
        </div>
        <div v-else="user" class="out">
            <a href="javascript:void(0)">欢迎，{{user.name}}</a>
            <a href="javascript:void(0)">退出</a>
        </div>
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
                user: {
                    name: 'allen',
                },
            }
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