<template>
    <div>
        <page-header></page-header>
        <search-bar></search-bar>

        two component ----
        <img src="../../assets/car.jpg" alt="">

        <page-footer></page-footer>
    </div>
</template>

<script>
    import pageHeader from '../../components/comm/header.vue'
    import pageFooter from '../../components/comm/footer.vue'
    import searchBar from '../../components/comm/search_bar.vue'
    export default {
        name: '',
        components: {
            pageHeader,
            pageFooter,
            searchBar,
        },
    }
</script>

<style lang="sass" rel="stylesheet/scss">

</style>