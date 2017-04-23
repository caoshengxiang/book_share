<template>
    <div>
        <ul>
            <li v-for="(item, index) in bookInfo" :key="index" class="dynamic-list">
                <img class="book-face" :src="item.img" alt="">
                <div class="list-con">
                    <div style="color: #48576a">
                        <div>{{item.rcmdWords}}</div>
                    </div>
                    <el-collapse accordion style="margin-top: 10px;">
                        <el-collapse-item>
                            <template slot="title">

                                <span v-if="item.comments">{{item.comments.length}}条回应</span>
                                <span v-else>无回应</span>
                                <el-rate
                                        v-model="item.averageScore"
                                        disabled
                                        show-text
                                        text-color="#ff9900"
                                        text-template="{value}"
                                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                                        :max="10"
                                        :low-threshold="3"
                                        :high-threshold="6"
                                        style="display: inline-block;margin-left: 10px; position: relative; top: -3px;"
                                >
                                </el-rate>
                            </template>
                            <div>
                                <comments :comments="item.comments" :id="item._id"></comments>
                            </div>
                        </el-collapse-item>
                    </el-collapse>

                    <!--<div content="comments">-->

                    <!--</div>-->
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import comments from './comments.vue'
    export default {
        name: 'dynamicList',
        props: {
            bookInfo: {
                default() {
                    return []
                },
                type: Array
            }
        },
        data() {
            return {
                rate: 1.7
            }
        },
        computed: {},
        methods: {},
        components: {
            comments,
        }

    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    .dynamic-list {
        margin-bottom: 40px;
        .book-face {
            width: 70px;
            float: left;
        }
        .list-con {
            float: left;
            margin-left: 20px;
            width: 672px;
        }
        &:after {
            content: '';
            display: block;
            clear: both;
        }
    }

</style>