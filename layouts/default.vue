<script setup lang="ts">
import headerComp from '~/components/header.vue'
</script>

<template>
    <div>
        <headerComp />
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.block{
    width: 100dvw;
    height: 200dvh;
    background: $tx-y;
}
</style>

