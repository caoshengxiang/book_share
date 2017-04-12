<template>
    <div class="list">
        <div class="hot-header"><a href="/"><img src="../../assets/logo.jpg" alt=""></a>  &nbsp;&nbsp;热榜&nbsp;&nbsp; | &nbsp;&nbsp;分享给朋友 共2000人访问</div>
        <div class="video-box">
            <video loop autoplay class="video">
                <source :src="videoSrc" type="video/mp4">
            </video>
        </div>
        <div class="hot-list">
            <hot-list :hotBooks="hotBooks"></hot-list>
        </div>
    </div>
</template>
<script>
    import top1 from '../../assets/list/s2801.jpg'
    import top2 from '../../assets/list/s2802.jpg'
    import top3 from '../../assets/list/s2803.jpg'
    import top4 from '../../assets/list/s2804.jpg'
    import top5 from '../../assets/list/s2805.jpg'
    import top6 from '../../assets/list/s2806.jpg'
    import top7 from '../../assets/list/s2807.jpg'
    import top8 from '../../assets/list/s2808.jpg'
    import top9 from '../../assets/list/s2809.jpg'
    import top10 from '../../assets/list/s2810.jpg'

    import bookvideo from '../../assets/list/video/bookvideo.mp4'

    import hotList from './body/hot_list.vue'
    export default {
        name: '',
        props: {},
        data() {
            return {
                videoSrc: bookvideo,
                hotBooks: [
                    {
                        poster: top1,
                        rank: 1,
                        score: 8.8,
                        name: '二手时间',
                        id: 1,
                    },
                    {
                        poster: top2,
                        rank: 2,
                        score: 8.6,
                        name: '极简宇宙史',
                        id: 2,
                    },
                    {
                        poster: top3,
                        rank: 3,
                        score: 9.0,
                        name: '无人生还',
                        id: 1,
                    },
                    {
                        poster: top4,
                        rank: 4,
                        score: 8.4,
                        name: '灯塔',
                        id: 4,
                    },
                    {
                        poster: top5,
                        rank: 5,
                        score: 8.7,
                        name: '或者为了讲述',
                        id: 5,
                    },{
                        poster: top6,
                        rank: 6,
                        score: 8.3,
                        name: '造房子',
                        id: 6,
                    },{
                        poster: top7,
                        rank: 7,
                        score: 8.4,
                        name: '北鸢',
                        id: 7,
                    },{
                        poster: top8,
                        rank: 8,
                        score: 8.7,
                        name: '斯通纳',
                        id: 8,
                    },{
                        poster: top9,
                        rank: 9,
                        score: 8.5,
                        name: '我可以咬一口吗',
                        id: 9,
                    },{
                        poster: top10,
                        rank: 10,
                        score: 8.8,
                        name: '我脑袋里的怪东西',
                        id: 10,
                    }

                ],
            }
        },
        computed: {},
        methods: {},
        components: {
            hotList,
        },
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    @import "../../styles/var";
    .list {

    }
    .hot-header {
        color: #ffffff;
        font-size: 12px;
        position: absolute;
        top: 20px;
        left: 10%;
        max-width: $pageContent;
        min-width: 950px;
        z-index: 3;
        a{
            color: #ffffff;
        }
        img {
            width: 20px;
        }
    }
    .video-box{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        &:before {
            content: "";
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            background: rgba(0,0,0,.6);
            z-index: 1;
        }
        .video{
            position: absolute;
            top: 0;
            left: 0%;
            width: 100%;
            /*height: 100%;*/
        }
    }
    .hot-list {
        position: absolute;
        bottom: 10%;
        z-index: 3;
        width: 100%;
    }
</style>