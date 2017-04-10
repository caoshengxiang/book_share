<template>
    <div class="book">
        <el-card :body-style="{ padding: '0px'}">
            <div class="img-box">
                <img :src="bookItem.img" class="image">
            </div>

            <div style="padding: 14px;">
                <span>{{bookItem.name}}</span>
                <div class="bottom clearfix">
                    <span class="author">{{ bookItem.author }}</span>
                    <el-button type="text" class="button">详细了解</el-button>
                </div>
            </div>
        </el-card>
    </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {
            }
        },
        props: {
            bookItem: {
                default: {
                    img: '',
                    name: '',
                    author: '',
                    keybord: '',
                    tag: '',
                },
                type: Object,
            }
        },
        computed: {},
        methods: {},
        components: {},
    }
</script>
<style scoped lang="sass" rel="stylesheet/scss">
    .book {
        margin-top: 10px;
    }
    .img-box{
        height: 395px;
        overflow: hidden;
    }
    .image {
        width: 100%;
        display: block;
        transition: all .8s;
        &:hover{
            transform: scale(1.2)
        }
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
        .author {
            font-size: 13px;
            color: #999;
            display:block;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
        }
        .button {
            padding: 0;
            float: right;
        }
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>