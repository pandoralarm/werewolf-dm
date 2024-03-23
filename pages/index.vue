<template>
    <div class="main-wrapper" :class="condition.time === 'day' ? 'day' : 'night'">
        <div class="banner" :class="{ compact: isGameRunning }">
            <div class="title">The Werewolf Game</div>
            <div class="progress animate">{{ condition.progressText }}</div>
            <div class="start-button" :class="{ downloading: isDownloading }" @click="runGame()"><span v-if="!isGameRunning">Mulai</span></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "example",
        layout: "default",
        data() {
            return {
                condition: {
                    time: "night",
                    progressText: "Memindai Data",
                },
                isDownloading: true,
                isGameRunning: false,
            };
        },
        methods: {
            runGame() {
                this.isGameRunning = true;
            },
            init() {
                const hasRunBefore = JSON.parse(localStorage.getItem("game_condition"));
                // const hasRunBefore = false;
                if (!hasRunBefore) {
                    JSON.stringify(localStorage.setItem("game_condition", this.condition));
                    setTimeout(() => {
                        this.condition.progressText = "Mengunduh Data";
                    }, 1000);
                    setTimeout(() => {
                        setTimeout(() => {
                            this.condition.progressText = "";
                        }, 1000);
                        this.isDownloading = false;
                    }, 10000);
                } else {
                    setTimeout(() => {
                        this.condition.progressText = "";
                        this.isDownloading = false;
                    }, 1000);
                }
            },
        },
        mounted() {
            setTimeout(() => {
                this.init();
            }, 2000);
        },
    };
</script>

<style lang="scss">
    .main-wrapper {
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        transition: all 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        // Default background
        background-color: #121941;

        .banner {
            padding: 2vh 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 22px;

            max-height: 100vh;
            transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            &.compact {
                gap: 12px;
                max-height: 10vh;

                .title {
                    font-size: 6vw;
                }

                .progress {
                    font-size: 3.5vw;
                }

                .start-button {
                    max-height: 0;
                    padding: 0;
                    border: 0;
                    outline: 0;
                    margin-top: 0;
                }
            }
            .title {
                transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                font-size: 12vw;
                font-family: "SF Intoxicated Blues Extended", sans-serif;
            }

            .start-button {
                transition: all 1s ease;
                margin-top: 5vh;
                background-color: #fff;
                padding: 4px 22px;
                color: #121941;
                font-size: 6vw;
                border: 3px solid #121941;
                outline: 2px solid #fff;
                max-height: auto;

                &.downloading {
                    opacity: 0;
                    user-select: none;
                    pointer-events: none;
                }
                &:active {
                    filter: invert(100%);
                }
            }

            .progress {
                transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                animation: fadeIn 2s ease-in-out infinite; /* Adjust the duration and timing function as needed */
            }
        }

        &.night {
            color: #fff;
            background-color: #121941;
        }

        &.day {
            color: #121941;
            background-color: #dbd8a9;
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
    }
</style>
