<template>
    <div class="container">
        <input :placeholder="placeholder" />
    </div>
</template>
<script>
    export default {
        props: {
            placeholder: {
                type: String,
                default: "Placeholder",
            },
        },
    };
</script>
<style lang="scss" scoped>
    @import "InputText";
</style>
