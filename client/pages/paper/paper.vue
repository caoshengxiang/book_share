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
    import img21 from '../../assets/paper/cardpic/p201.jpg'
    import img22 from '../../assets/paper/cardpic/p202.jpg'
    import img31 from '../../assets/paper/cardpic/p301.jpg'
    import img32 from '../../assets/paper/cardpic/p302.jpg'
    import img41 from '../../assets/paper/cardpic/p401.jpg'
    import img42 from '../../assets/paper/cardpic/p402.jpg'
    import img51 from '../../assets/paper/cardpic/p501.jpg'
    import img52 from '../../assets/paper/cardpic/p502.jpg'
    import img61 from '../../assets/paper/cardpic/p601.jpg'
    import img62 from '../../assets/paper/cardpic/p602.jpg'
    import img71 from '../../assets/paper/cardpic/p701.jpg'
    import img72 from '../../assets/paper/cardpic/p702.jpg'
    import img81 from '../../assets/paper/cardpic/p801.jpg'
    import img82 from '../../assets/paper/cardpic/p802.jpg'
    import img91 from '../../assets/paper/cardpic/p901.jpg'
    import img92 from '../../assets/paper/cardpic/p902.jpg'
    import img101 from '../../assets/paper/cardpic/p1001.jpg'
    import img102 from '../../assets/paper/cardpic/p1002.jpg'


    import pageHeader from '../../components/comm/header.vue'
    import pageFooter from '../../components/comm/footer.vue'
    import searchBar from '../../components/comm/search_bar.vue'

    export default {
        name: '',
        props: {},
        data() {
            return {
                carousel: [
                img5, img4, img3, img2, img1
                ],
                paperBooks: [
                    {poster: img11, minImg: img12, name: '被仰望与被遗忘的', text: '20世纪最伟大的非虚构书写，全世界特稿写作者的典范', id: '1', refPrice: '45.50'},
                    {poster: img21, minImg: img22, name: '百鬼夜行 阳', text: '“世上没有不可思议的事”，京极夏彦的妖怪十夜谈', id: '1', refPrice: '34.30'},
                    {poster: img31, minImg: img32, name: '造物', text: '改变世界的万物图典，3000幅图里的发明与冒险', id: '1', refPrice: '47.60'},
                    {poster: img41, minImg: img42, name: '山之四季', text: '一个人在山里住七年，日本桂冠诗人山居笔记', id: '1', refPrice: '22.40'},
                    {poster: img51, minImg: img52, name: '现世', text: '时间和世界的秘密，普利策奖得主的万物之书', id: '1', refPrice: '27.30'},
                    {poster: img61, minImg: img62, name: '我在天堂那五年', text: '不可思议的友谊奇迹，人生路上柔软的智慧之光', id: '1', refPrice: '33.60'},
                    {poster: img71, minImg: img72, name: '时光列车', text: '帕蒂·史密斯《只是孩子》姊妹篇，如何面对人生的不断失去？', id: '1', refPrice: '40.60'},
                    {poster: img81, minImg: img82, name: '日本料理神髓', text: '日本料理之神的美味心经，和他45年厨房里的人生修行', id: '1', refPrice: '31.50'},
                    {poster: img91, minImg: img92, name: '寂然的狂喜', text: '迄今最美的叶芝诗集，天才诗歌与艺术相遇的纸上美术馆', id: '1', refPrice: '已售罄'},
                    {poster: img101, minImg: img102, name: '猫的私人词典', text: '骨灰级猫奴为喵星人写的词典情书，无所不包的猫文化浮世绘', id: '1', refPrice: '54.60'},
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