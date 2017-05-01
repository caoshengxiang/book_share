<template>
    <div>
        <page-header></page-header>
        <search-bar></search-bar>

        <div class="category-con">
            <div class="menu">
                <h5>图书商品分类</h5>
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-menu-item
                            v-for="(item, index) in categoryL"
                            @click="category(item)"
                            :index="index + '-1'"
                            :key="index"
                    >{{item}}</el-menu-item>
                </el-menu>
            </div>
            <div class="category-lists">
                <h2 class="cat-head">书籍</h2>
                <div class="cat-list">
                    <book-list :books="books"></book-list>
                </div>
            </div>
        </div>

        <page-footer></page-footer>
    </div>
</template>
<script>
    import pageHeader from '../../components/comm/header.vue'
    import pageFooter from '../../components/comm/footer.vue'
    import searchBar from '../../components/comm/search_bar.vue'
    import bookList from './body/book_list.vue'

    import img1 from '../../assets/list/s2801.jpg'

    import $ from 'jquery'
    export default {
        name: '',
        props: {},
        data() {
            return {
                categoryL: ['文学', '流行', '文化', '生活', '经管', '科技', '其他'],
                books: [],
            }
        },
        computed: {},
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            category(va) {
//                console.log(va)
                this.getCategory(va)
            },
            getCategory(classify) {
                var that = this;
                $.getJSON('/books/list/'+classify,
                    function (result) {
                        if(result.s) {
                            that.books = result.d;
                        }
                })
            }
        },
        components: {
            pageHeader,
            pageFooter,
            searchBar,
            bookList,
        },
        created() {
            this.getCategory('文学')
        }
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    @import "../../styles/var";
    .category-con{
        width: $pageContent;
        margin: 50px auto;
        .menu {
            width: 130px;
            float: left;
            h5 {
                text-align: center;
                margin-bottom: 10px;
            }
        }
        .category-lists {
            margin-left: 30px;
            margin-top: 31px;
            width: $pageContent - 180px;
            float: left;
            .cat-head {
                float: left;
                width: 100%;
                border-left: solid 3px #679dc8;
                padding: 5px 0;
                padding-left: 10px;
                font-size: 16px;
                font-weight: normal;
                background-color: #F3F3F3;
                box-sizing: border-box;
            }
            .cat-list {
                margin-top: 51px;
            }
        }
        &:after{
            content: '';
            display: block;
            clear: both;
        }
    }
</style>