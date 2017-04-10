<template>
    <div>
        <page-header></page-header>
        <router-view></router-view>

        <recommend-book></recommend-book>
    </div>
</template>
<script>
    import pageHeader from '../components/menu/header.vue'
    import recommendBook from './recommend_book.vue'

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
            recommendBook,
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
<style scoped lang="sass" rel="stylesheet/scss">

</style>