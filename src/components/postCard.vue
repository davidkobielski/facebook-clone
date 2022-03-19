<template>
  <div class="w-full bg-headerColor mt-6 rounded-lg px-4 py-2 text-gray-300">
    <div class="h-14 flex flex-row justify-between items-center">
      <div class="flex flex-row">
        <img
          class="w-10 h-10 rounded-full mr-2"
          src="https://scontent.fpoz5-1.fna.fbcdn.net/v/t1.6435-9/cp0/c37.0.50.50a/p50x50/89852867_3133010573429842_7078062767587983360_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=hlN1IiQKnoYAX_pLSOp&_nc_ht=scontent.fpoz5-1.fna&oh=d67912526dd9a35dc315fa71ca7c4851&oe=618D597F"
          alt=""
        />
        <div class="flex flex-col items-start">
          <p class="text-gray-200 font-semibold">{{ post.group }}</p>
          <div class="flex flex-row">
            <p class="text-gray-300 text-sm">{{ post.author }}</p>
            <span class="text-gray-300 text-sm mx-1 items-center">&#183;</span>
            <p class="text-gray-300 text-sm">{{ dateComparison }}</p>
          </div>
        </div>
      </div>
      <button class="text-gray-300 font-black text-2xl">&#183;&#183;&#183;</button>
    </div>
    <div class="w-full text-left text-gray-300">
      <div v-if="fullContent === false">{{ shortContent }}.... <span class="font-black cursor-pointer hover:underline" @click="showFullContent">See more</span></div>
      <div v-else>{{ post.content }}</div>
    </div>
    <div class="flex flex-row justify-between mt-2">
      <div class="flex flex-row items-center">
        <div v-for="reaction in sortReactions" :key="reaction[0]" class="reaction">
          {{ reaction["like"] }}
          <img :src="require('@/assets/postReactions/' + reaction[0] + '.svg')" :alt="reaction[0]" />
        </div>
        <div class="ml-1">{{ reactionsCounter }}</div>
      </div>
      <div>{{ commentsCounter }}</div>
    </div>
    <div class="border-b border-opacity-30 mt-2 w-full items-center"></div>
    <div class="flex flex-row justify-center w-full mt-2">
      <div class="w-3/10 h-8 mx-1 hover:bg-gray-500 hover:bg-opacity-30 rounded-lg flex flex-row justify-center items-center cursor-pointer">
        <img src="@/assets/likePost.png" alt="like post" class="w-8 filter invert">
        <p class="font-semibold">Like it!</p>
      </div>
      <div class="w-3/10 h-8 mx-1 hover:bg-gray-500 hover:bg-opacity-30 rounded-lg flex flex-row justify-center items-center cursor-pointer">
        <img class="w-5 filter invert" src="https://lh6.googleusercontent.com/proxy/dbj5NnBep4ZxLjoqwW9HjjMQK3OXEj6lhb2R0hgvt4nuqay2hCwnC9F9rPkbtu7Zc0uF2CqHULT_gLHbkj1BzAHHiQc0NBeWYBbeM6xlLZrv=w1200-h630-p-k-no-nu" alt="">
        <p class="ml-2 font-semibold">Comment</p>
      </div>
      <div class="w-3/10 h-8 mx-1 hover:bg-gray-500 hover:bg-opacity-30 rounded-lg">asd</div>
      <div class="w-1/10 h-8 mx-1 hover:bg-gray-500 hover:bg-opacity-30 rounded-lg">asd</div>


    </div>
  </div>
</template>

<script>
export default {
  name: "postCard",
  props: ["post"],
  data() {
    return {
      fullContent: false,
    }
  },
  methods: {
    showFullContent() {
      this.fullContent = true
    },
  },
  computed: {
    dateComparison() {
      const actualDate = new Date()
      const createdDate = new Date(this.post.createdDate)
      let comparingDate = (actualDate.getTime() - createdDate.getTime()) / 60000
      comparingDate = Math.floor(comparingDate)
      console.log(comparingDate)
      if (comparingDate < 60) {
        return comparingDate + " min."
      } else if (comparingDate >= 60 && comparingDate <= 1440) {
        comparingDate = Math.floor(comparingDate / 60)
        if (comparingDate == 1) {
          return comparingDate + " hr."
        } else {
          return comparingDate + " hrs."
        }
      }
      return 0
    },
    shortContent() {
      return this.post.content.substring(0, 250)
    },
    sortReactions() {
      // console.log(this.post.reactions[0] + "ez")
      let sortable = []
      for (let reaction in this.post.reactions) {
        console.log(reaction)
        if (this.post.reactions[reaction].length > 0) {
          sortable.push([reaction, this.post.reactions[reaction]])
        }
      }
      console.log(sortable)
      return sortable.sort(function (a, b) {
        return b[1] - a[1]
      })

      // return this.post.reactions.slice().sort(function(a,b) {return b[1] - a[1]})
    },
    reactionsCounter() {
      let result = 0
      for (let i in this.post.reactions) {
        result += this.post.reactions[i].length
      }
      return result
    },
    commentsCounter() {
      const result = this.post.comments.length
      if (result === 1) {
        return result + " komentarz"
      } else if (result > 1 && result <= 4) {
        return result + " komentarze"
      } else if (result > 4) {
        return result + " komentarzy"
      }
      return 0
    },
  },
  mounted() {
    console.log(this.post)
  },
}
</script>

<style lang="scss" scoped>
.reaction {
  margin-left: -6px;
  border: 3px solid rgb(36, 37, 38);
  border-radius: 100%;

  &:nth-child(1) {
    margin-left: 0;
  }

  @for $i from 1 through 5 {
    &:nth-child(#{$i}) {
      z-index: 7- $i;
    }
  }
}
</style>
