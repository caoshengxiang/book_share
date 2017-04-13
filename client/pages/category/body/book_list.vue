<template>
    <div class="cat-lists">
        <ul>
            <li v-for="item in books">
                <img :src="item.img" :alt="item.name" :title="item.name" class="poster">
                <div class="text">
                    <p><span class="color">{{item.name}}</span></p>
                    <p>作者: <span class="color">{{item.author}}</span></p>
                    <p>分类: <span class="color">{{item.cat}}</span></p>
                </div>
            </li>
        </ul>

    </div>
</template>
<script>

    export default {
        name: '',
        props: {
            books: {
                default() {
                    return []
                },
                type: Array
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {},
        components: {},
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    .cat-lists {
        width: 100%;
        /*border: 1px solid red;*/
        ul {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            li{
                width: 20%;
                border: 1px solid #F3F3F3;
                box-sizing: border-box;
                padding: 35px;
                &:hover{
                    border-color: #ccc;
                    cursor: pointer;
                }
                .poster {

                }
                .text{
                    p{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .color{
                        color: #679dc8;
                    }
                }
            }
        }
    }
</style>