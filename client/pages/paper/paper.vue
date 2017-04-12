<template>
    <div class="paper">
        <page-header></page-header>
        <search-bar></search-bar>
        <div class="carousel container">

            <el-carousel indicator-position="outside" height="230px">
                <el-carousel-item v-for="(item, index) in carousel" :key="index">
                    <img class="caro-img" :src="item" alt="">
                </el-carousel-item>
            </el-carousel>

            <el-row :gutter="30" style="margin-top: 80px;">
                <el-col :span="12" v-for="item in paperBooks" :key="item.id" style="margin-top: 30px;">
                    <paper-card :paperBook="item"></paper-card>
                </el-col>
            </el-row>

        </div>
        <page-footer></page-footer>
    </div>
</template>
<script>

    import img5 from '../../assets/paper/1235.jpg'
    import img4 from '../../assets/paper/1234.jpg'
    import img3 from '../../assets/paper/1233.jpg'
    import img2 from '../../assets/paper/1232.jpg'
    import img1 from '../../assets/paper/1231.jpg'


    import paperCard from '../../components/card/paper_card.vue'
    import img11 from '../../assets/paper/cardpic/1676.jpg'
    import img12 from '../../assets/paper/cardpic/1679.jpg'

    import pageHeader from '../../components/comm/header.vue'
    import pageFooter from '../../components/comm/footer.vue'
    import searchBar from '../../components/comm/search_bar.vue'

    export default {
        name: '',
        props: {},
        data() {
            return {
                carousel: [
//                    'https://img3.doubanio.com/view/freyr_page_photo/raw/public/1235.jpg',
//                    'https://img3.doubanio.com/view/freyr_page_photo/raw/public/1234.jpg',
//                    'https://img5.doubanio.com/view/freyr_page_photo/raw/public/1086.jpg',
//                    'https://img3.doubanio.com/view/freyr_page_photo/raw/public/1393.jpg',
//                    'https://img1.doubanio.com/view/freyr_page_photo/raw/public/1439.jpg',
                img5, img4, img3, img2, img1
                ],
                paperBooks: [
                    {poster: img11, minImg: img12, name: '被仰望与被遗忘的', text: '20世纪最伟大的非虚构书写，全世界特稿写作者的典范', id: '1', refPrice: '65.00'},
                    {poster: img11, minImg: img12, name: '被仰望与被遗忘的', text: '20世纪最伟大的非虚构书写，全世界特稿写作者的典范', id: '1', refPrice: '65.00'},
                    {poster: 'https://img5.doubanio.com/view/freyr_page_photo/raw/public/1676.jpg', minImg: 'https://img1.doubanio.com/view/freyr_page_photo/raw/public/1679.jpg', name: '被仰望与被遗忘的', text: '20世纪最伟大的非虚构书写，全世界特稿写作者的典范', id: '1', refPrice: '65.00'},
                ]
            }
        },
        computed: {},
        methods: {},
        components: {
            pageHeader,
            pageFooter,
            paperCard,
            searchBar,
        },

    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    .paper {
        background: rgba(245,239,235, .6);
    }
    .carousel {
        width: 950px;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .caro-img {
        width: 100%;

    }
</style>