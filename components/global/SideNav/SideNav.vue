<template>
    <div class="sidenav inter-font" :class="{ collapsed: collapsed }">
        <div class="logo">
            <img v-if="!collapsed" src="/logo.png" />
        </div>
        <div class="menu-title">MENU</div>
        <div v-for="nav in config" :key="nav.id" class="item" :class="{ active: $route.path === nav.path }" @click="goTo(nav.path)">
            <div class="nav-icon"><BaseIcon :icon="nav.icon" /></div>
            <div v-if="!collapsed">{{ $dub(nav.label) }}</div>
        </div>

        <div class="collapse-button" :class="{ collapsed: collapsed }" @click="collapsed = !collapsed"><BaseIcon :icon="'chev-right'" /></div>
    </div>
</template>

<script>
    import NavConfig from "@/config/Global/Nav.js";
    export default {
        data() {
            return {
                collapsed: false,
                config: NavConfig,
            };
        },

        methods: {
            goTo(path) {
                this.$router.push(path);
            },
        },
    };
</script>
<style lang="scss" scoped>
    @import "SideNav";
</style>
