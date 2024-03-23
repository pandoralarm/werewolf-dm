<template>
    <div class="main-wrapper">
        <div class="content-wrapper">
            <div class="view">
                <NuxtPage />
            </div>
        </div>
    </div>
</template>

<script>
    // import SideNav from "~/components/Global/SideNav/SideNav.vue";
    export default { props: ["pageTitle"] };
</script>
<style lang="scss" scoped>
    .main-wrapper {
        display: flex;
        height: 100%;

        .content-wrapper {
            display: flex;
            flex-direction: column;
        }
    }
</style>
