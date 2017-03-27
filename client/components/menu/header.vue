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
                    {name: 'p1', path: '/p1'},
                    {name: 'p2', path: '/p2'},
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