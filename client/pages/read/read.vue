<template>
    <div>
        <div class="read">
            <page-header></page-header>
            <search-bar></search-bar>
            <div class="read-con">
                <read-con-header></read-con-header>

                <el-row :gutter="20">
                    <el-col :span="6" v-for="item in bookLists" :key="item.id">
                        <book-card :bookItem="item" :imgHeight="325"></book-card>
                    </el-col>
                </el-row>

            </div>
            <page-footer></page-footer>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import pageHeader from '../../components/comm/header.vue'
    import pageFooter from '../../components/comm/footer.vue'
    import searchBar from '../../components/comm/search_bar.vue'

    import readConHeader from './body/read_con_header.vue'
    import bookCard from '../../components/card/book_card.vue'

    export default {
        name: 'One',
        data() {
            return {
                bookLists: [
                    {
                        img: 'https://img1.doubanio.com/lpic/s29260049.jpg',
                        name: '美丽小宇宙',
                        author: '毕淑敏',
                        tag: '推荐',
                        id: '1'
                    },{
                        img: 'https://img1.doubanio.com/lpic/s29287637.jpg',
                        name: '深暗',
                        author: '[美] 赫克托·托巴尔',
                        tag: '推荐',
                        id: '4'
                    }, {
                        img: 'https://img1.doubanio.com/lpic/s29205408.jpg',
                        name: '如何听懂音乐',
                        author: '[美] 艾伦·科普兰',
                        tag: '推荐',
                        id: '5'
                    }, {
                        img: 'https://img1.doubanio.com/lpic/s29399468.jpg',
                        name: '圆环',
                        author: '[美] 戴夫·艾格斯',
                        tag: '推荐',
                        id: '6'
                    }
                ]
            }
        },
        computed: {
//            count() {
//                return this.$store.state.count;
//            }
        },
        methods: {
//            cliadd() {
//                alert()
//            },
//            fet(url) {
//                fetch(url).then(function (res) {
//                    return res.json()
//                }).then(function (data) {
//                    console.log(data)
//                }).catch(function (e) {
//                    console.log(e)
//                })
//            }
        },
        components: {
            pageHeader,
            pageFooter,
            searchBar,
            readConHeader,
            bookCard,
        },
        created() {
            const that = this;

            // get
//            $.ajax({
//              type: "GET",
//              url: 'http://localhost:3000/people',
//              data: {},
//              dataType: 'json',
//              success(data) {
//                console.log(data, "get 数据成功返回")
//                that.ajaxData = data;
//              },
//              error() {
//                console.log('ajax获取数据失败')
//              }
//            });

//            this.fet('http://localhost:3000/people')


            // post
            //            $.post('http://localhost:3000/people', {
            //                "name": "allen",
            //                "sex": "man",
            //                "age": 18
            //            }, (data)=>{
            //                alert(data)
            //            })

            // put
            /*$.ajax({
             type: "put",
             url: 'http://localhost:3000/people/2',
             data: {
             "name": "jak",
             "sex": "man",
             "age": 20
             },
             dataType: 'json',
             success(data) {
             console.log(data, "PUT 成功返回数据")
             },
             error() {
             alert('error')
             }
             });*/

            // DELETE
            /*$.ajax({
             type: "delete",
             url: 'http://localhost:3000/people/3',
             data: {
             "id": 3
             },
             dataType: 'json',
             success(data) {
             console.log(data, "delete 成功返回数据")
             },
             error() {
             alert('error')
             }
             });*/
        }
    }
</script>

<style lang="sass" rel="stylesheet/scss">
    @import "../../styles/var";
    .read {
        .read-con {
            width: $pageContent;
            margin: 50px auto;
            min-height: 600px;
        }
    }
</style>