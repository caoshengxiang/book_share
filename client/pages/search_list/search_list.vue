<template>
    <div class="search-res">
        <page-header></page-header>
        <search-bar></search-bar>
        <div class="search-list">
            <el-row :gutter="30">
                <el-col :span="6">
                    <book-card :bookItem="book"></book-card>
                </el-col>
            </el-row>
        </div>
        <page-footer></page-footer>
    </div>
</template>

<script>
    import bookCard from '../../components/card/book_card.vue'
    import pageHeader from '../../components/comm/header.vue'
    import pageFooter from '../../components/comm/footer.vue'
    import searchBar from '../../components/comm/search_bar.vue'
    export default {
        name: 'searchList',
        data() {
          return {
              book: this.$route.params.book,
          }
        },
        components: {
            bookCard,
            pageHeader,
            pageFooter,
            searchBar,
        }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
    .search-list {
        padding: 30px;
    }
</style>