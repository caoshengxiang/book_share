<template>
    <div class="score-books">
        <div class="title">
            <label for="">热名标签</label>
            <a href="javascript:void(0)" v-for="item in tags" class="tag-item">{{item.name}}</a>
        </div>
        <div class="tag-books">
            <score-book-card :bookList="bookList"></score-book-card>
        </div>
    </div>
</template>
<script>
    import scoreBookCard from '../../../components/card/score_book_card.vue'
    export default {
        name: '',
        props: {},
        data() {
            return {
                tags: [
                    {
                        name: '文学',
                        id: ''
                    },{
                        name: '流行',
                        id: ''
                    },{
                        name: '文化',
                        id: ''
                    },{
                        name: '生活',
                        id: ''
                    },{
                        name: '科技',
                        id: ''
                    },{
                        name: '经管',
                        id: ''
                    },
                ],
                bookList: []
            }
        },
        computed: {},
        methods: {},
        components: {
            scoreBookCard,
        },
        created() {
            const bookL = [
                {
                    id: 1,
                    img: 'https://img1.doubanio.com/spic/s29331058.jpg',
                    name: '世界的凛冬',
                    score: 5.5,
                    author: '[英] 肯·福莱特',
                    keys: ['历史','肯·福莱特','英国文学'],
                    comments: [
                        {name: '宝木笑', con: '肯仿佛为读者建造了一个尽量真实的试验场，让他的人物在其中经历各种苦难历程，使人性得以多维的展现。肯仿佛为读者建造了一个尽量真实的试验场，让他的人物在其中经历各种苦难历程，使人性得以多维的展现。', time: '2017.04.11', score: 8, userId: '23'}
                    ]
                },
                {
                    id: 1,
                    img: 'https://img1.doubanio.com/spic/s29331058.jpg',
                    name: '世界的凛冬',
                    score: 5.5,
                    author: '[英] 肯·福莱特',
                    keys: ['历史','肯·福莱特','英国文学'],
                    comments: [
                        {name: '宝木笑', con: '肯仿佛为读者建造了一个尽量真实的试验场，让他的人物在其中经历各种苦难历程，使人性得以多维的展现。', time: '2017.04.11', score: 8, userId: '23'}
                    ]
                },
                {
                    id: 1,
                    img: 'https://img1.doubanio.com/spic/s29331058.jpg',
                    name: '世界的凛冬',
                    score: 5.5,
                    author: '[英] 肯·福莱特',
                    keys: ['历史','肯·福莱特','英国文学'],
                    comments: [
                        {name: '宝木笑', con: '肯仿佛为读者建造了一个尽量真实的试验场，让他的人物在其中经历各种苦难历程，使人性得以多维的展现。', time: '2017.04.11', score: 8, userId: '23'}
                    ]
                },{
                    id: 1,
                    img: 'https://img1.doubanio.com/spic/s29331058.jpg',
                    name: '世界的凛冬',
                    score: 5.5,
                    author: '[英] 肯·福莱特',
                    keys: ['历史','肯·福莱特','英国文学'],
                    comments: [
                        {name: '宝木笑', con: '肯仿佛为读者建造了一个尽量真实的试验场，让他的人物在其中经历各种苦难历程，使人性得以多维的展现。', time: '2017.04.11', score: 8, userId: '23'}
                    ]
                },{
                    id: 1,
                    img: 'https://img1.doubanio.com/spic/s29331058.jpg',
                    name: '世界的凛冬',
                    score: 5.5,
                    author: '[英] 肯·福莱特',
                    keys: ['历史','肯·福莱特','英国文学'],
                    comments: [
                        {name: '宝木笑', con: '肯仿佛为读者建造了一个尽量真实的试验场，让他的人物在其中经历各种苦难历程，使人性得以多维的展现。', time: '2017.04.11', score: 8, userId: '23'}
                    ]
                },{
                    id: 1,
                    img: 'https://img1.doubanio.com/spic/s29331058.jpg',
                    name: '世界的凛冬',
                    score: 5.5,
                    author: '[英] 肯·福莱特',
                    keys: ['历史','肯·福莱特','英国文学'],
                    comments: [
                        {name: '宝木笑', con: '肯仿佛为读者建造了一个尽量真实的试验场，让他的人物在其中经历各种苦难历程，使人性得以多维的展现。', time: '2017.04.11', score: 8, userId: '23'}
                    ]
                }
            ];

            this.bookList = bookL;
        },
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    .score-books {
        padding-bottom: 20px;
        .title {
            margin-top: 40px;
            margin-bottom: -10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
            .tag-item {
                margin-left: 10px;
            }
        }
        .tag-books {

        }
    }
</style>