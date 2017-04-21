<template>
    <div>
        <form id="myForm" action="http://v0.api.upyun.com/xxx" method="post" enctype="multipart/form-data">
            <input type="hidden" name="policy" value="">
            <input type="hidden" name="signature" value="">

            <div>
                <label><s>*</s>图片选择:</label>
                <div>
                    <input type="file" name="fulAvatar"
                           @change="uploadImg()">
                </div>
            </div>
        </form>
        <img id="img" src="" alt="">
        <div>参考: https://segmentfault.com/a/1190000005706031</div>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default {
        name: '',
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {
            /**
             * ajax 上传。
             */
            uploadImg() {
                //用form 表单直接 构造formData 对象; 就不需要下面的append 方法来为表单进行赋值了。
                var formData = new FormData($("#myForm")[0]);
                var url = "/upload/uploader";
                $.ajax({
                    url: url,
                    type: 'POST',
                    data: formData,

                    /**
                     * 必须false才会避开jQuery对 formdata 的默认处理
                     * XMLHttpRequest会对 formdata 进行正确的处理
                     */
                    processData: false,
                    /**
                     *必须false才会自动加上正确的Content-Type
                     */
                    contentType: false,
                    success: function (responseStr) {
                        console.log(responseStr);
                        $("#img").attr({"src": responseStr.url});
                    },
                    error: function (responseStr) {
                        alert(responseStr.newPath);
                    }
                });
            }
        },
        components: {},
        beforeCreate(){
        },
        created() {

        },
        beforeMount() {
        },
        mounted() {
        },
        beforeUpdate() {
        },
        updated() {
        },
        activated() {
        },
        deactivated() {
        },
        beforeDestroy() {
        },
        destroyed() {
        }
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
</style>