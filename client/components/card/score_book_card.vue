<template>
    <div class="score-card">
        <el-row :gutter="30">
            <el-col :span="12" v-for="item in bookList">
                <div class="book-item">
                    <img :src="item.img" :alt="item.name" class="img">
                    <div class="item-detail">
                        <h5>{{item.name}}</h5>
                        <el-rate
                                v-model="item.score"
                                :max="10"
                                :allow-half="true"
                                disabled
                                show-text
                                text-color="#ff9900"
                                text-template="{value}">
                        </el-rate>
                        <p><span style="color: #3377aa">作者：</span>{{item.author}}</p>
                        <p><span v-for="k in item.keys" class="key">{{k}}</span></p>
                        <div>
                            <p class="comment"><span style="color: #3377aa">{{item.comments[0].name}}评论: </span>{{item.comments[0].con}}</p>
                            <p><a href="javascript:void(0)"><span>所有评价: {{item.comments.length}}</span> </a></p>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>

    export default {
        name: '',
        props: {
            bookList: {
                default(){
                    return []
                },
                type: Array
            },
        },
        data() {
            return {}
        },
        computed: {
        },
        methods: {},
        components: {},

    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    .score-card {
        .book-item {
            display: flex;
            margin-top: 30px;
            height: 220px;
            .img {
                width: 28%;
                min-width: 160px;
                margin-right: 10px;
            }
            .item-detail {
                width: 70%;

                .key {
                    border: 1px solid #ccc;
                    padding: 3px 6px;
                    margin: 3px 0;
                }
                .comment{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    color: #666;
                }
            }
        }
    }
</style>