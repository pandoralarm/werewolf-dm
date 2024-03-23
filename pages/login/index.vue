<template>
    <div>
        <GenericOnBoarding />
    </div>
</template>
<script setup>
definePageMeta({
  layout: 'generic'
})
</script>
<script>
    export default {
        name: "example",
        layout: "generic",
        data() {
            return {
                pageTitle: "Homepage Title",
            };
        },
    };
</script>

<style lang="scss"></style>
