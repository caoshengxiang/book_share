<template>
    <div class="header">
        <ul>
            <li v-for="item in menu">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
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
                ]
            }
        }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
    .header{
        height: 50px;
        min-width: 950px;
        ul,li {
            list-style-type: none;
        }
        li {

        }
    }
</style>