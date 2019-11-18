<template>
    <div class="navbar">
        <NavHead></NavHead>
        <NavSub></NavSub>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import NavHead from './NavHead.vue'
import NavSub from './NavSub.vue'
export default Vue.extend({
    name: 'Navbar',
    components: {
        NavHead,
        NavSub
    }
})
</script>