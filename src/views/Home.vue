<template>
  <div class="home w-screen max-w-full h-screen bg-bodyColor grid grid-cols-12">
    <Sidebar class="col-start-1 col-end-4" />
    <div class="content col-start-1 col-end-13 sm:col-start-2 sm:col-span-10 lg:col-start-1 lg:col-end-10 xl:col-start-4 h-screen flex justify-start items-center flex-col">
      <Stories />
      <div class="w-full sm:w-full bg-gray-200 mt-6 rounded-lg h-40 p-2">
        <div>
          <img src="" alt="" />
          <div v-if="postModal.postText === ''" @click="openPostModal">O czym myślisz, Dawid?</div>
          <div v-if="postModal.postText !== ''">{{ postModal.postText }}</div>
        </div>
        <div v-if="postModal.isOpen" class="absolute w-3/4 h-52 bg-mainBlue left-0 right-0 mx-auto">
          <input v-model="postModal.postText" type="text" />
        </div>
        <div></div>
      </div>

      <MessengerRooms />
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
      <div></div>
    </div>
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar"
import Stories from "@/components/stories"
import MessengerRooms from "@/components/messengerRoomsWrapper"
import PostCard from "@/components/postCard"

export default {
  name: "Home",
  components: {
    MessengerRooms,
    Stories,
    Sidebar,
    PostCard,
  },
  data() {
    return {
      postModal: {
        isOpen: false,
        postText: "",
      },
      posts: [
        {
          id: 0,
          author: "Andrzej Sapkowski",
          group: "Problemy Polskiej Branży IT",
          createdDate: "Fri Oct 22 2021 11:34:09 GMT+0200 (czas środkowoeuropejski letni)",
          content:
            "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
          reactions: { like: ['Grzesiu', 'franek'], love: ["Bartek"], haha: [], wow: [], angry: ["Filip", "Ormiasz", "Orfeusz"] },
          comments: [
            { createdBy: "ABC", content: "No elo", reactions: [] },
            { createdBy: "dasda", content: "No dasda", reactions: [] },
          ],
        },
      ],
    }
  },
  methods: {
    openPostModal() {
      this.postModal.isOpen = true
    },
  },
}
</script>
