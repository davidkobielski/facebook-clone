<template>
  <div class="w-1/5 h-screen pl-2 pt-5">
    <div class="">
      <ul>
        <li v-for="item in navLinks.slice(0, 6)" :key="item.id">
          <SidebarItem :icon="item.address" :name="item.name" />
        </li>
        <div v-if="showedSectionFirst">
          <li v-for="item in navLinks.slice(6)" :key="item.id">
            <SidebarItem :icon="item.address" :name="item.name" />
          </li>
        </div>

        <li v-if="!showedSectionFirst">
          <div
            @click="showMoreSectionFirst"
            class="flex items-center cursor-pointer w-4/5 h-12 pl-2 hover:bg-gray-500 hover:bg-opacity-30 rounded-lg"
          >
            <img src="icon" class="w-9 h-9 rounded-full" />
            <div class="bg-gray-600"></div>
            <span class="font-bold ml-2 text-gray-200 text-base">Zobacz więcej</span>
          </div>
        </li>
        <li v-if="showedSectionFirst">
          <div
            @click="hideSectionFirst"
            class="flex items-center cursor-pointer w-4/5 h-12 pl-2 hover:bg-gray-500 hover:bg-opacity-30 rounded-lg"
          >
            <img src="icon" class="w-9 h-9 rounded-full" />
            <div class="bg-gray-600"></div>
            <span class="font-bold ml-2 text-gray-200 text-base">Zobacz mniej</span>
          </div>
        </li>
      </ul>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import SidebarItem from '@/components/sidebar-item'
export default {
  name: 'Sidebar',
  components: {
    SidebarItem,
  },
  data() {
    return {
      showedSectionFirst: false,
      navLinks: [
        {
          id: 0,
          name: 'John Dżonkowski',
          address:
            'https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg',
        },
        { id: 1, name: 'Znajomi', address: 'https://www.facebook.com/rsrc.php/v3/y8/r/S0U5ECzYUSu.png' },
        { id: 2, name: 'Grupy', address: 'https://www.facebook.com/rsrc.php/v3/y5/r/PrjLkDYpYbH.png' },
        { id: 3, name: 'Strony', address: 'https://www.facebook.com/rsrc.php/v3/yH/r/kyCAf2jbZvF.png' },
        { id: 4, name: 'Marketplace', address: 'https://www.facebook.com/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png' },
        { id: 5, name: 'Watch', address: 'https://www.facebook.com/rsrc.php/v3/y5/r/duk32h44Y31.png' },
        { id: 6, name: 'Business Suite', address: 'https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/Wmkho44tBFC.png' },
        { id: 7, name: 'COVID-19- centrum informacji', address: 'https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png' },
        { id: 8, name: 'Facebook Pay', address: 'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png' },
        { id: 9, name: 'Graj w gry', address: 'https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png' },
        { id: 10, name: 'Listy znajomych', address: 'https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png' },
      ],
    }
  },
  methods: {
    showMoreSectionFirst() {
      this.showedSectionFirst = true
    },
    hideSectionFirst() {
        this.showedSectionFirst = false
    }
  },
}
</script>

<style>
</style>