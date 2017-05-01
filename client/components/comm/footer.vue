<template>
    <div class="footer">
        <div class="share">

        </div>
        <div class="icp">
            蜀ICP备16027276号-1
        </div>
    </div>
</template>
<script>

    export default {
        name: '',
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
        components: {},
        created() {
            window._bd_share_config={
                "common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"24"},
                "share":{},
                "image":{
                    "viewList":["qzone","tsina","tqq","weixin","sqq"],
                    "viewText":"分享到：",
                    "viewSize":"24"
                },
                "selectShare":{
                    "bdContainerClass":null,
                    "bdSelectMiniList":["qzone","tsina","tqq","weixin","sqq"]
                }
            };
//            with(document)0[
            (document.getElementsByTagName('head')[0]||body)
                .appendChild(document.createElement('script'))
                .src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(- new Date()/36e5)
//                ];
        }
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    .footer {
        /*height: 200px;*/
        /*border: 1px solid #ccc;*/
        background: #f6f6f1;
        margin-top: 20px;
        border-top: 1px dashed #cccccc;
        padding: 50px;
        .share {
            text-align: center;
            .bdsharebuttonbox{
                text-align: center !important;
                display: flex;
                justify-content: center;
            }
        }
        .icp {
            text-align: center;
        }
    }
</style>