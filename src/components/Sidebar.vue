<template>
  <div class="hidden xl:block w-full  h-screen pl-2 pt-5">
    <div class="sectionWrapper pb-2">
      <ul>
        <li v-for="item in navLinks.slice(0, 6)" :key="item.id">
          <SidebarItem :to="item.dest" :icon="item.address" :name="item.name" />
        </li>
        <div v-if="showedSectionFirst">
          <li v-for="item in navLinks.slice(6)" :key="item.id">
            <SidebarItem :to="item.dest" :icon="item.address" :name="item.name" />
          </li>
        </div>

        <li v-if="!showedSectionFirst">
          <div
            @click="showMoreSection('first')"
            class="flex items-center cursor-pointer w-4/5 h-12 pl-2 hover:bg-gray-500 hover:bg-opacity-30 rounded-lg"
          >
            <div class="flex items-center justify-center cursor-pointer rounded-full bg-opacity-30 bg-gray-500 w-10 h-10">
              <font-awesome-icon icon="angle-down" color="white" class="fa-lg" />
            </div>
            <div class="bg-gray-600"></div>
            <span class="font-bold ml-2 text-gray-200 text-base">Zobacz więcej</span>
          </div>
        </li>
        <li v-if="showedSectionFirst">
          <div
            @click="hideSection('first')"
            class="flex items-center cursor-pointer w-4/5 h-12 pl-2 hover:bg-gray-500 hover:bg-opacity-30 rounded-lg"
          >
            <div class="flex items-center justify-center cursor-pointer rounded-full bg-opacity-30 bg-gray-500 w-10 h-10">
              <font-awesome-icon icon="angle-up" color="white" class="fa-lg" />
            </div>
            <div class="bg-gray-600"></div>
            <span class="font-bold ml-2 text-gray-200 text-base">Zobacz mniej</span>
          </div>
        </li>
      </ul>
      <div class="w-4/5 flex justify-center">
        <div class="border-b border-opacity-40 mt-2 w-full mx-3"></div>
      </div>
    </div>

    <div>
      <p class="text-left font-bold text-gray-300 pl-3 py-2 text-lg">Twoje skróty</p>
      <ul>
        <li v-for="item in shortcutsLinks.slice(0, 6)" :key="item.id">
          <SidebarItem :to="item.dest" :icon="item.address" :name="item.name" />
        </li>
        <div v-if="showedSectionFirst">
          <li v-for="item in shortcutsLinks.slice(6)" :key="item.id">
            <SidebarItem :to="item.dest" :icon="item.address" :name="item.name" />
          </li>
        </div>

        <li v-if="!showedSectionSecond">
          <div
            @click="showMoreSection('second')"
            class="flex items-center cursor-pointer w-4/5 h-12 pl-2 hover:bg-gray-500 hover:bg-opacity-30 rounded-lg"
          >
            <div class="flex items-center justify-center cursor-pointer rounded-full bg-opacity-30 bg-gray-500 w-10 h-10">
              <font-awesome-icon icon="angle-down" color="white" class="fa-lg" />
            </div>
            <div class="bg-gray-600"></div>
            <span class="font-bold ml-2 text-gray-200 text-base">Zobacz więcej</span>
          </div>
        </li>
        <li v-if="showedSectionSecond">
          <div
            @click="hideSection('second')"
            class="flex items-center cursor-pointer w-4/5 h-12 pl-2 hover:bg-gray-500 hover:bg-opacity-30 rounded-lg"
          >
            <div class="flex items-center justify-center cursor-pointer rounded-full bg-opacity-30 bg-gray-500 w-10 h-10">
              <font-awesome-icon icon="angle-up" color="white" class="fa-lg" />
            </div>
            <div class="bg-gray-600"></div>
            <span class="font-bold ml-2 text-gray-200 text-base">Zobacz mniej</span>
          </div>
        </li>
      </ul>
    </div>
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
      showedSectionSecond: false,
      navLinks: [
        {
          id: 0,
          name: 'John Dżonkowski',
          dest: '/profile',
          address:
            'https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg',
        },
        { id: 1, dest: '/friends', name: 'Znajomi', address: 'https://www.facebook.com/rsrc.php/v3/y8/r/S0U5ECzYUSu.png' },
        { id: 2, dest: '/groups/feed', name: 'Grupy', address: 'https://www.facebook.com/rsrc.php/v3/y5/r/PrjLkDYpYbH.png' },
        { id: 3, dest: '/pages', name: 'Strony', address: 'https://www.facebook.com/rsrc.php/v3/yH/r/kyCAf2jbZvF.png' },
        { id: 4, dest: '/marketplace', name: 'Marketplace', address: 'https://www.facebook.com/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png' },
        { id: 5, dest: '/watch', name: 'Watch', address: 'https://www.facebook.com/rsrc.php/v3/y5/r/duk32h44Y31.png' },
        { id: 6, dest: 'business.localhost:8080', name: 'Business Suite', address: 'https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/Wmkho44tBFC.png' },
        {
          id: 7,
          dest: '/coronavirus_info',
          name: 'COVID-19- centrum informacji',
          address: 'https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png',
        },
        { id: 8, dest: '/facebook_pay', name: 'Facebook Pay', address: 'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png' },
        { id: 9, dest: '/games', name: 'Graj w gry', address: 'https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png' },
        { id: 10, dest: '/friends/friendlist', name: 'Listy znajomych', address: 'https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png' },
      ],
      shortcutsLinks: [
        {
          id: 0,
          name: 'Problemy Polskiej Branży IT',
          dest: '/groups/ppbit',
          address:
            'https://scontent.fpoz5-1.fna.fbcdn.net/v/t1.6435-9/cp0/c37.0.50.50a/p50x50/89852867_3133010573429842_7078062767587983360_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=hlN1IiQKnoYAX_pLSOp&_nc_ht=scontent.fpoz5-1.fna&oh=d67912526dd9a35dc315fa71ca7c4851&oe=618D597F',
        },
        {
          id: 1,
          dest: '/groups/12312312313',
          name: 'gif z tumblr - jaki to film?',
          address:
            'https://scontent.fpoz5-1.fna.fbcdn.net/v/t1.6435-9/cp0/c23.0.50.50a/p50x50/150324286_1637126996472060_5406293216274415635_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=qOBx0bCJoBcAX-k1BYU&_nc_ht=scontent.fpoz5-1.fna&oh=fde9bcacefa2312ce141039834584ec1&oe=618B8DE5',
        },
      ],
    }
  },
  methods: {
    showMoreSection(section) {
      if (section == 'first') {
        this.showedSectionFirst = true
      } else if (section == 'second') {
        this.showedSectionSecond = true
      }
    },
    hideSection(section) {
      if (section == 'first') {
        this.showedSectionFirst = false
      } else if (section == 'second') {
        this.showedSectionSecond = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
// .sectionWrapper {

// &::after {
//   content: '';
// border-bottom: 1px solid black;
// height: 1px;
// width: 50px;
// background-color:red;
// }

// }
</style>