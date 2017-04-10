<template>
    <div>
        <search-bar></search-bar>
        <recommend-book></recommend-book>
    </div>
</template>

<script>
    import searchBar from './body/search_bar.vue'
    import recommendBook from './body/recommend_book.vue'
    export default {
        name: 'Home',
        data() {
            return {}
        },
        components: {
            searchBar,
            recommendBook,
        },
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>

</style>