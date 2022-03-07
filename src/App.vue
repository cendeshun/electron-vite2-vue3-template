<template>
  <Layout />
</template>

<script setup>
import Layout from "./layout/index.vue";
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();

onMounted(() => {
  appRedirect();
})
//解决Electron打包后路由无效问题
const appRedirect = () => {
  if(import.meta.env.MODE !== 'development'){
    router.push('/');
  }
}

</script>

<style lang="scss" scoped></style>
