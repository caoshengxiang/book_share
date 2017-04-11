<template>
    <div class="paper-card">
        <a href="javascript:void(0)" target="_blank">
            <div class="item-img item-img01">
                <img :src="paperBook.poster" alt="">
            </div>
            <div class="item-details">
                <div class="bookface-img">
                    <img :src="paperBook.minImg" alt="">
                </div>
                <span class="book-price">参考价¥<i>{{paperBook.refPrice}}</i></span>
                <div class="book-brief">
                    <h3>{{paperBook.name}}</h3>
                    <div class="book-quote">
                        <p>{{paperBook.text}}</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>
<script>

    export default {
        name: '',
        props: {
            paperBook: {
                default: {},
                type: Object,
            }
        },
        data() {
            return {}
        },
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    .paper-card {
        a{
            text-decoration: none;
        }
        .item-img{
            img{
                width: 100%;
                height: 180px;
                min-height: 180px;
            }
        }
        .item-details{
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
            position: relative;
            height: 108px;
            padding-bottom: 30px;
            background: #fff;

            .bookface-img{
                width: 106px;
                height: 140px;
                line-height: 140px;
                background-size: 100%;
                position: absolute;
                left: 25px;
                bottom: 30px;
                text-align: center;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .book-price{
                position: absolute;
                right: -1px;
                top: -13px;
                color: #fff;
                background: #e76648;
                font-size: 15px;
                line-height: 20px;
                padding: 3px 8px;
            }
            .book-brief{
                margin-left: 155px;
                padding-top: 10px;
                h3{
                    font-size: 20px;
                    color: #494949;
                    font-weight: 500;
                    line-height: 24px;
                    padding: 20px 0 5px;
                }
                .book-quote{
                    p{
                        color: #9b9b9b;
                    }
                }
            }
        }
    }
</style>