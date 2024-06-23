<script setup>
import top from './components/top.vue'
import btop from './components/btop.vue'
import bbottom from './components/bbottom.vue'
import bottom from './components/bottom.vue'
</script>

<template>
  <div>
    <top/>
  </div>
  <div>
    <btop/>
  </div>
  <div>
    <bbottom/>
  </div>
  <div>
    <bottom/>
  </div>
</template>

<style>
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    p{
      margin-top: 20px;
      font-size: 20px;
    }
    a{
      text-decoration: none;
    }
    h4{
      color: #3ACEC3;
    }
</style>

