<template>
    <div class="main">
        <div class="content">
            <div class="title">Let's Get Started</div>
            <div class="sub">Sign up or login into to have a full digital experience in our restaurant</div>

            <div class="form">
                <BaseInputText />
                <BaseInputText />
            </div>
            <BaseButton :label="'Get Started'" />
        </div>

        <div class="hero">
            <img src="https://s3-gsi-hris.s3.ap-southeast-1.amazonaws.com/Illustration.png" />
            <div class="sub">From ordering to paying, that’s all contactless</div>
        </div>
 
    </div>
</template>
<script>
    export default {};
</script>
<style lang="scss" scoped>
    @import "OnBoarding";
</style>
