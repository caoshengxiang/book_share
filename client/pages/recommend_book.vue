<template>
    <div style="margin: 0 auto;">
        <div class="rem-title" style="border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 10px">
            <label for="">新书推荐</label>&nbsp;&nbsp;<a href="javascript:void(0)">更多</a>
        </div>
        <div>
            <el-row :gutter="20">
                <el-col :span="6" :xs="24" v-for="(item, index) in remBookList" :key="item.id">
                    <book-card :bookItem="item"></book-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import bookCard from '../components/card/book_card.vue'
    export default {
        name: '',
        props: {},
        data() {
            return {
                remBookList: [
                    {
                        img: 'https://img1.doubanio.com/lpic/s29260049.jpg',
                        name: '美丽小宇宙',
                        author: '毕淑敏',
                        tag: '推荐',
                        id: '1'
                    },
                    {
                        img: 'https://img3.doubanio.com/lpic/s29331250.jpg',
                        name: '你属于黑夜，我属于你',
                        author: '小岛',
                        tag: '推荐',
                        id: '2'
                    },
                    {
                        img: 'https://img1.doubanio.com/lpic/s29417057.jpg',
                        name: '不管怎么样，这就是二十岁的我们',
                        author: 'WhatYouNeed,our old day',
                        tag: '推荐',
                        id: '3'
                    },
                    {
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
        computed: {},
        methods: {},
        components: {
            bookCard,
        },
        beforeCreate(){
        },
        created() {
        },
        beforeMount() {
        },
        mounted() {
        },
        beforeUpdate() {
        },
        updated() {
        },
        activated() {
        },
        deactivated() {
        },
        beforeDestroy() {
        },
        destroyed() {
        }
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
</style>