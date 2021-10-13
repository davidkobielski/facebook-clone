<template>
  <router-link :to="to" class="relative sm:flex justify-center items-center h-full w-16 md:w-24 lg:w-32" :class="customClass" >
        <font-awesome-icon :icon="icon" color="lightgray" class="text-2xl" />
        <div class="bgRouterShadow hidden absolute h-5/6 w-full z-1 rounded-lg bg-gray-500 bg-opacity-30"></div>
      </router-link>
</template>

<script>
export default {
    name: 'menuItemLink',
    props: {
        to: String,
        icon: [String, Array],
        customClass: String,
        unsetClass: Array,
    },
    data() {
        return {
            // link
        }
    },
    beforeMount() {
        // if(this.unsetClass > 0) {

        // }
    }
}
</script>

<style lang="scss" scoped>
a {
  svg {
    z-index: 2;
  }
  &:hover .bgRouterShadow {
    display: block;
  }
}
.router-link-exact-active {
  height: 100%;
  &::before {
    content: '';
    width: 100%;
    position: absolute;
    bottom: -2px;
    border-bottom: 4px solid #2d88ff;
  }
  svg {
    color: #2d88ff;
    z-index: 2;
  }
  &:hover .bgRouterShadow {
    display: none;
  }
}

</style>