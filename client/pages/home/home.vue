<template>
    <div>
        <search-bar></search-bar>
    </div>
</template>

<script>
    import searchBar from './body/search_bar.vue'
    export default {
        name: 'Home',
        data() {
            return {}
        },
        components: {
            searchBar,
        },
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>

</style>