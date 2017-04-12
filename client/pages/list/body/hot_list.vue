<template>
    <div class="hot-list">
        <ul>
            <li v-for="item in hotBooks" class="item">
                <div class="rank">
                    <div class="line"></div>
                    <div class="rank-num">{{computeRank(item.rank)}}</div>
                </div>
                <div>
                    <img :src="item.poster" :alt="item.name">
                    <p class="text"><span class="name">{{item.name}}</span>&nbsp;<span class="score">{{item.score}}</span></p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>


    export default {
        name: '',
        props: {
            hotBooks: {
                default() {
                    return []
                },
                type: Array,
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            computeRank(r) {
                return r<10? '0'+r:r;
            }
        },
        components: {},
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    @import "../../../styles/var";
    .hot-list{
        color: #ffffff;

        ul {
            width: $pageContent;
            display: flex;
            justify-content: center;
            margin: 0 auto;
            .item {
                width: 103px;
                margin: 0 10px;
                position: relative;
                .rank {
                    .line {
                        width: 35px;
                        height: 35px;
                        border-bottom: 1px solid #ffffff;
                        transform: rotate(-45deg);
                        position: absolute;
                        left: -22px;
                        top: -20px;
                    }
                    .rank-num {
                        font-weight: bold;
                        font-size: 24px;
                        position: absolute;
                        color: #f6a623;
                        left: -8px;
                        top: -12px;
                    }
                }
                img {
                    width: 86px;
                    height: 122px;
                }
                .text {
                    background: #000000;
                    margin-top: -4px;
                    .name {
                        font-size: 14px;
                    }
                    .score {
                        color: #f6a623;
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>