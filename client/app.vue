<template>
    <div class="app">
        <ul>
            <li v-for="item in menu">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
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

<style lang="sass" rel="">

</style>