<template>
    <div>
        <page-header></page-header>
        <router-view></router-view>
    </div>
</template>
<script>
    import pageHeader from '../components/menu/header.vue'

    export default {
        name: '',
        props: {},
        data() {
            return {
            }
        },
        computed: {},
        methods: {},
        components: {
            pageHeader,
        },
        beforeCreate(){
        },
        created() {
        },
        beforeMount() {
        },
        mounted() {
        },
        beforeUpdate() {
        },
        updated() {
        },
        activated() {
        },
        deactivated() {
        },
        beforeDestroy() {
        },
        destroyed() {
        }
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    .header {

    }
    .container {

    }
</style>