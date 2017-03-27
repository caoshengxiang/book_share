<template>
    <div>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>
<script>
    import Header from '../components/menu/header.vue'
    export default {
        name: '',
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
        components: {
            Header,
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
<style scoped>
</style>