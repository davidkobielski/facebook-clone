<template>
<div class="w-4/5 h-14 py-1 pl-2 hover:bg-gray-500 hover:bg-opacity-30 rounded-lg text-left">
  <router-link :to="to" class="flex items-center w-full h-full">
      <img :src="icon" :alt="name" class="img w-10 h-10 rounded-full">
      
    <div class=" bg-gray-600"></div>
    <span class="font-semibold ml-2 text-gray-300 text-base">{{name}}</span>
  </router-link>
  </div>
</template>

<script>
export default {
  // mounted() {
  //   const img = document.querySelector('.img');
  //   console.log(document.querySelector('.img').naturalWidth);
  //   console.log(document.querySelector('.img').naturalHeight);
  //   if(img.naturalWidth == img.naturalHeight) {
  //     img.classList.add('rounded-full')
  //   } else {
  //     img.classList.add('rounded-xl')
  //   }
  // },
    props: {
        icon: String,
        name: String,
        to: String,
    },
  name: 'SidebarItem',
}
</script>

<style>
</style>