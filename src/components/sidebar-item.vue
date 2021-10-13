<template>

<div class="w-4/5 h-12 pl-2 hover:bg-gray-500 hover:bg-opacity-30 rounded-lg">
  <router-link to="#" class="flex items-center w-full h-full">
      <img :src="icon" :alt="name" class="w-9 h-9 rounded-full">
      
    <div class=" bg-gray-600"></div>
    <span class="font-bold ml-2 text-gray-200 text-base">{{name}}</span>
  </router-link>
  </div>
</template>

<script>
export default {
    props: {
        icon: String,
        name: String,
    },
  name: 'SidebarItem',
}
</script>

<style>
</style>