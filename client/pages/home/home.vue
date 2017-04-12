<template>
    <div>
        <page-header></page-header>
        <search-bar></search-bar>
        <div class="container rec">
            <recommend-book></recommend-book>
            <score-book></score-book>
        </div>
        <page-footer></page-footer>
    </div>
</template>

<script>
    import pageHeader from '../../components/comm/header.vue'
    import pageFooter from '../../components/comm/footer.vue'
    import searchBar from '../../components/comm/search_bar.vue'
    import recommendBook from './body/recommend_book.vue'
    import scoreBook from './body/score_book.vue'
    export default {
        name: 'Home',
        data() {
            return {}
        },
        components: {
            pageHeader,
            pageFooter,
            searchBar,
            recommendBook,
            scoreBook,
        },
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
    .rec {
        margin-top: 20px;
    }
</style>