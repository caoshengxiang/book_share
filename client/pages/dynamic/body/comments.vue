<template>
    <div>
        <ul>
            <li class="comments-item">
                <img src="../../../assets/user.jpg" alt="" class="u-header">
                <div class="u-comment">
                    <p class="u-bg"><span class="u-name">爱银</span> <span class="u-time">2017-04-12 09:25:11</span></p>
                    <el-rate
                            v-model="rate"
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
                    <p>没错的，恶是个秘密，没人真正说得清。</p>
                </div>
            </li>
            <li class="comments-item">
                <img src="../../../assets/user.jpg" alt="" class="u-header">
                <div class="u-comment">
                    <p class="u-bg"><span class="u-name">爱银</span> <span class="u-time">2017-04-12 09:25:11</span></p>
                    <el-rate
                            v-model="rate"
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
                    <p>没错的，恶是个秘密，没人真正说得清。</p>
                </div>
            </li>
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
                    <el-button style="margin-top: 10px;">加上去</el-button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>

    export default {
        name: '',
        props: {},
        data() {
            return {
                rate: 1.7,
                textArea: '',
            }
        },
        computed: {},
        methods: {},
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