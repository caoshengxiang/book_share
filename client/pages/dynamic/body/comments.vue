<template>
    <div>
        <ul>
            <li class="comments-item" v-for="(item, index) in comments" :data-uId="item.userId">
                <img src="../../../assets/user.jpg" alt="" class="u-header">
                <div class="u-comment">
                    <p class="u-bg"><span class="u-name">{{item.username}}</span> <span class="u-time">{{item.time}}</span></p>
                    <el-rate
                            v-model="item.score"
                            disabled
                            show-text
                            text-color="#ff9900"
                            text-template="{value}"
                            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                            :max="10"
                            :low-threshold="3"
                            :high-threshold="6"
                            style="margin: 10px 0;"
                    >
                    </el-rate>
                    <p>{{item.content}}</p>
                </div>
            </li>

            <!-- 用户评论 -->
            <li class="comments-item">
                <img src="../../../assets/user.jpg" alt="" class="u-header">
                <div class="u-comment">
                    <p class="u-bg"><span class="u-name">allen</span></p>
                    <el-rate
                            v-model="rate"
                            show-text
                            :texts="[1,2,3,4,5,6,7,8,9,10]"
                            text-color="#ff9900"
                            text-template="{value}"
                            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                            :max="10"
                            :low-threshold="3"
                            :high-threshold="6"
                            style="margin: 10px 0;"
                    >
                    </el-rate>
                    <el-input
                            type="textarea"
                            :rows="4"
                            placeholder="请输入内容"
                            v-model="textArea">
                    </el-input>
                    <el-button style="margin-top: 10px;" @click="addComment">加上去</el-button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default {
        name: '',
        props: {
            comments: {
                default() {
                    return []
                },
                type: Array
            }
        },
        data() {
            return {
                rate: 0,
                textArea: '',
            }
        },
        computed: {},
        methods: {
            addComment() {
                if(localStorage.user) {
                    var u = JSON.parse(localStorage.user);
                    $.post('/books/comment', {
                        userid: u._id,
                        username: u.username,
                        content: this.textArea,
                        time: new Date(),
                        score: this.rate,
                    }, function (result) {
                        console.log(result)
                    })
                } else {
                    this.$alert('你还没有登录！')
                }

            }
        },
        components: {},
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    .comments-item{
        margin-bottom: 26px;
        .u-header{
            float: left;
            width: 48px;
        }
        .u-comment{
            float: left;
            margin-left: 10px;
            width: 582px;

            .u-bg{
                background-color: rgba(246,246,241,0.8);
                width: 100%;
                .u-name{
                    color: #666699;
                }
                .u-time{
                    margin-left: 10px;
                    color: #999;
                }
            }
        }
        &:after{
            content: '';
            display: block;
            height: 0;
            width: 0;
            clear: both;
        }
    }
</style>