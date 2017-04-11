<template>
    <div>
        <search-bar></search-bar>
        <div class="container rec">
            <recommend-book></recommend-book>
        </div>
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
    .rec {
        margin-top: 20px;
    }
</style>