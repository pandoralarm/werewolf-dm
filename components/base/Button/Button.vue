<template>
    <button :class="buttonClass" @click="handleClick" :disabled="disabled">
        {{ label }}
    </button>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: "button",
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            label: {
                type: String,
                default: "Button",
            },
        },
        computed: {
            buttonClass() {
                return `btn btn-${this.type}`;
            },
        },
        methods: {
            handleClick() {
                // Handle button click event here
                console.log("Button clicked!");
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import "Button";
</style>
