<template>
    <div class="dynamic-list">
        <img class="book-face" src="../../../assets/list/s2801.jpg" alt="">
        <div class="list-con">
            <div style="color: #48576a">
                <div>
                    在人们的印象中，女巫的形象都是邪恶、阴暗、有强烈的嫉妒心和报复心，会使用魔法和制造魔药的，当然，最后还是被狠狠地惩罚。这样的女巫形象在《白雪公主》、《海的女儿》、《睡美人》、《亨舍尔和格莱特》里都出现过，是大家非常熟悉的反面角色。在西方古老的传说中，女巫是神秘和法力无边的。人们常常把她们和黑暗、邪恶、丑陋、衰老这些令人厌恶和恐惧的事物联系在一起，并且想象出许多关于女巫用魔法干坏事的故事。</div>
            </div>
            <el-collapse accordion style="margin-top: 10px;">
                <el-collapse-item>
                    <template slot="title">

                        <span>30条回应</span>
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
                                style="display: inline-block;margin-left: 10px; position: relative; top: -3px;"
                        >
                        </el-rate>
                    </template>
                    <div>
                        <comments></comments>
                    </div>
                </el-collapse-item>
            </el-collapse>

            <div content="comments">

            </div>
        </div>
    </div>
</template>
<script>

    import comments from './comments.vue'
    export default {
        name: '',
        props: {},
        data() {
            return {
                rate: 1.7
            }
        },
        computed: {},
        methods: {},
        components: {
            comments,
        },

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