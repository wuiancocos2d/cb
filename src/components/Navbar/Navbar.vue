<template>
    <div class="navbar">
        <NavHead></NavHead>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import NavHead from './NavHead.vue'
export default Vue.extend({
    name: 'Navbar',
    components: {
        NavHead
    }
})
</script>