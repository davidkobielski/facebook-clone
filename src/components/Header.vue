<template>
  <div
    id="header"
    class="relative overflow-hidden flex flex-row sm:justify-between items-center h-14 pl-4 pr-4 bg-headerColor border-b-2 border-accentColor"
  >
    <div>
      <div>
        <ul class="flex flex-row content-center">
          <li class="facebookLogo">
            <svg viewBox="0 0 36 36" fill="url(#jsc_s_x)" height="40" width="40">
              <defs>
                <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_x">
                  <stop offset="0%" stop-color="#0062E0"></stop>
                  <stop offset="100%" stop-color="#19AFFF"></stop>
                </linearGradient>
              </defs>
              <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
              <path
                fill="white"
                d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
              ></path>
            </svg>
          </li>
          <li class="searchContainer flex flex-row">
            <button
              class="searchButton flex items-center justify-center rounded-full outline-none ml-2 list-none bg-gray-500 lg:bg-transparent bg-opacity-30 w-10 h-10 z-10"
            >
              <font-awesome-icon v-if="!isSearchAnimating" icon="search" size="1x" color="lightgray" />
              <font-awesome-icon v-else icon="arrow-left" size="1x" color="lightgray" />
            </button>
            <input type="text" @focusin="focusIn" @focusout="focusOut" placeholder="Szukaj na Facebooku" class="searchInput text-gray-300 hidden lg:block w-64 pl-10 -ml-10 bg-gray-500 bg-opacity-30 h-10 rounded-full outline-none" />
          </li>
        </ul>
      </div>
      <div></div>
    </div>
    <div class="flex justify-start items-center h-full left-0">
      <menuItemLink to="/" icon="home" customClass="hidden " />
      <menuItemLink to="pages" :icon="['fab', 'font-awesome-flag']" customClass="hidden" />
      <menuItemLink to="watch" icon="tv" customClass="hidden " />
      <menuItemLink to="/groups/feed" icon="users" customClass="hidden sm:hidden md:flex" />
      <menuItemLink to="/events" icon="calendar-day" customClass="hidden sm:hidden bmd:flex" />
      <menuItemLink to="bookmarks" icon="bars" customClass="bmd:hidden ml-4 sm:ml-0 flex" />
      <!-- <router-link to="bookmarks" class="lg:hidden ml-4 sm:ml-0 relative flex justify-center items-center h-full w-16">
        <font-awesome-icon icon="bars" color="lightgray" size="2x" />
        <div class="bgRouterShadow hidden absolute h-5/6 w-full z-1 rounded-lg bg-gray-500 bg-opacity-30"></div>
      </router-link> -->

      <!-- <router-link to="bookmarks" class="lg:hidden ml-4 sm:ml-0 flex items-center justify-center  w-14 sm:w-16 h-5/6 rounded-lg hover:bg-gray-500 hover:bg-opacity-30 active:bg-opacity-60">
          
      </router-link> -->
    </div>

    <div class="flex items-center flex-row absolute right-0 mr-4 sm:mr-0 sm:static">
      <router-link
        to="profile"
        class="profileLink hidden xl:flex flex-row items-center justify-center h-10 pl-1 pr-3 rounded-full hover:bg-gray-500 hover:bg-opacity-30"
      >
        <img
          class="w-7 h-7 rounded-full"
          src="https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg"
          alt="profile picture"
        />
        <p class="text-base font-semibold text-gray-300 ml-2">Dawid</p>
      </router-link>

      <div class="flex items-center justify-center cursor-pointer rounded-full ml-2 bg-opacity-30 bg-gray-500 w-10 h-10">
        <font-awesome-icon icon="plus" color="lightgray" />
      </div>
      <div class="flex items-center justify-center cursor-pointer rounded-full ml-2 bg-opacity-30 bg-gray-500 w-10 h-10">
        <font-awesome-icon :icon="['fab', 'facebook-messenger']" color="lightgray" />
      </div>
      <div class="flex items-center justify-center cursor-pointer rounded-full ml-2 bg-opacity-30 bg-gray-500 w-10 h-10">
        <font-awesome-icon icon="bell" color="lightgray" />
      </div>
      <div class="flex items-center justify-center cursor-pointer rounded-full ml-2 bg-opacity-30 bg-gray-500 w-10 h-10">
        <font-awesome-icon icon="caret-down" color="lightgray" />
      </div>
    </div>
  </div>
</template>

<script>
import menuItemLink from './menu-item-link.vue'
export default {
  components: {
    menuItemLink,
  },
  data() {
      return {
          isSearchAnimating: false,
      }
  },
  methods: {
    focusIn() {
          this.isSearchAnimating = true;
      const searchButton = document.querySelector('.searchContainer > button')
      const searchInput = document.querySelector('.searchInput')
      const searchContainer = document.querySelector('.searchContainer')
      const facebookLogo = document.querySelector('.facebookLogo')
      facebookLogo.classList.add('facebookLogoAnimation')
      searchButton.classList.add('searchButtonAnimation')
      searchContainer.classList.add('searchContainerAnimation')
      searchInput.classList.add('searchInputAnimation')
      searchInput.classList.remove('pl-10')
      searchInput.classList.add('pl-4')

    },
    focusOut() {

      const searchButton = document.querySelector('.searchContainer > button')
        const searchInput = document.querySelector('.searchInput')
      const searchContainer = document.querySelector('.searchContainer')
      const facebookLogo = document.querySelector('.facebookLogo')
      facebookLogo.classList.remove('facebookLogoAnimation')
      searchButton.classList.remove('searchButtonAnimation')
      searchContainer.classList.remove('searchContainerAnimation')
      searchInput.classList.remove('searchInputAnimation')
    searchInput.classList.remove('pl-4')
      searchInput.classList.add('pl-10')
      this.isSearchAnimating = false;
    },
    mounted() {},
  },
}
</script>

<style lang="scss" >
.facebookLogo {
  transition: transform .5s;

  &.facebookLogoAnimation {
    transform: translateX(-80px);
  }
}
.searchButton {
  transition: transform .5s;

  &.searchButtonAnimation {
    transform: translateX(-55px);
  }
}
.searchInput {
  transition: all .5s;
transform-origin:bottom right;

  &.searchInputAnimation {
      transform-origin:bottom right;
    transform: scaleX(1.05);
    
  }
}

.profileLink {
  &.router-link-active {
    background-color: rgba(9, 80, 172, 0.6);

    &:hover {
      background-color: rgba(9, 80, 172, 0.9);
    }
    p {
      color: #2d88ff;
    }
  }
}
</style>