<template>
    <div>
        <page-header></page-header>
        <search-bar></search-bar>

        <div class="dynamic-con">
            <dynamic-list :bookInfo="bookInfo"></dynamic-list>

            <div class="upload-book">
                <user-upload></user-upload>
            </div>
        </div>

        <page-footer></page-footer>
    </div>
</template>

<script>
    import pageHeader from '../../components/comm/header.vue'
    import pageFooter from '../../components/comm/footer.vue'
    import searchBar from '../../components/comm/search_bar.vue'

    import dynamicList from './body/dynamic_list.vue'
    import userUpload from './body/user_upload.vue'
    import $ from 'jquery'
    export default {
        name: 'Dynamic',
        data() {
            return {
                bookInfo: [],
            }
        },
        components: {
            pageHeader,
            pageFooter,
            searchBar,
            dynamicList,
            userUpload,
        },
        created() {
            var that = this;
            $.getJSON('/books/lists', function (result) {
                if(result.s) {
                    that.bookInfo = result.d;
                } else {
                    console.log(result.d)
                }
            })
        }
    }
</script>

<style lang="sass" rel="stylesheet/scss">
    @import "../../styles/var";
    .dynamic-con {
        width: $pageContent;
        margin: 50px auto;
        position: relative;
    }
    .upload-book {
        width: 200px;
        height: 300px;
        /*border: 1px solid #ccc;*/
        position: absolute;
        right: 0;
        top: 0;
        background: #f6f6f1;
        padding: 20px 10px 0 10px;
    }
</style>