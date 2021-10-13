<template>
  <div class="home w-screen max-w-full h-screen bg-bodyColor">
    <Sidebar />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar';

export default {
  name: "Home",
  components: {
Sidebar
  },
};
</script>
