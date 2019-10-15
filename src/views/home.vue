<template>
    <div class="home">
        <section class="mask" :class="[mask.load?'':'close', mask.fadeOut?'fadeOut':'']">
            <span class="gradient-text">GAMEPOWER</span>
        </section>
        <section class="content">

        </section>
    </div>
</template>

<script>
    import preload from "../utils/preload"

    export default {
        name: 'home',
        components: {},
        data() {
            return {
                mask: {
                    load: true
                }
            }
        },
        methods: {
            getGames() {
                setTimeout(() => {
                    this.load = false
                }, 1500)
            }
        },
        mounted() {
            Promise.all([preload.preLoadImg()]).then(
                this.mask.load = false
            ).catch(err => {
                console.error(err)
            })
        }
    }
</script>

<style lang="scss" type="text/scss">
    html, body {
        width: 100%;
        height: 100%;
    }

    .home {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }

    .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #222;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 100px;

        .gradient-text {
            font-weight: bold;
            background: #100c0c linear-gradient(to right, #fbe602 100%, #fff 0%) no-repeat left center;
            background-size: 95% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: loading 2s linear;
        }

        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("/img/mask-bg.jpg") no-repeat;
            background-size: cover;
            opacity: 0.05;
        }

        &.close {
            .gradient-text {
                background-size: 100% 100%;
            }
        }
    }

    @keyframes loading {
        0% {
            background-size: 0% 100%;
        }
        100% {
            background-size: 95% 100%;
        }
    }
</style>
