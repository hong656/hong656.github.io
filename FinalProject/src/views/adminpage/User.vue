<script setup>
import adminMenu from './admin-com/adminMenu.vue'
import adminHead from './admin-com/adminHead.vue'
import adminHeadlow from './admin-com/adminHeadlow.vue';
</script>


<template>
    <div class="user-all">
        <div class="all-user-left"><adminMenu/></div> 
        <div class="all-user-left">
            <adminHead/>
            <adminHeadlow/>
        </div> 
    </div>
</template>


<style>
.user-all{
    display: flex;
}
</style>


