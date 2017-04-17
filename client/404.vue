<template>
    <div id="content">
        <div class="scale"><a href="/">BS 404</a></div>
    </div>
</template>
<script>
    import fetch from './utils/fetch'
    export default {
        data() {
            return {
                d: {}
            }
        },
        created() {
//            fetch.post('http://localhost:3000/people', {
//                name: "yan",
//                sex: "man",
//                age: "18",
//            })
        }
    }
</script>
<style>
    .scale {
        background: red;
        width: 100px;
        height: 100px;
        transition: all 1s;
        animation: scale 1s ease;
        animation-fill-mode: forwards;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        margin: 100px auto;
    }

    .scale:hover {

    }

    @keyframes scale {
        30% {
            transform: rotate(90deg);
        }
        63% {
            transform: rotate(-90deg);
        }
        100% {
            transform: scale(1.2);
        }
    }
</style>