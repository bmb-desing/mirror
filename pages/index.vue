<template>
  <div>
    <div class="post">
      <posts v-for="post in posts" :key="post.id" :post="post"></posts>
    </div>
    <div class="button">
      <nuxt-link :to="'/posts'">Все записи</nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Posts from '~/components/Post.vue'
export default {
  components: {
      Posts
  },
  asyncData ({ error }) {
      return axios.get('https://api.mirror-universe.ru/posts/index')
          .then((res) => {
              return { posts: res.data}
          })
          .catch((e) => {
              error({ statusCode: 404, message: 'Страница не найдена' })
          })
  },
  head () {
    return {
      title: 'Зеркальная вселенная',
        meta: [
          {hid: 'description', name: 'description', content: 'Зеркальная вселенная. Все обо всем' },
          {hid: 'image', itemprop: 'image', name: 'image', content: 'index.jpg'},
          {hid: 'og:title', name: 'og:title', content: 'Зеркальная вселенная'},
          {hid: 'og:type', name: 'og:type', content: 'article'},
          {hid: 'og:url', name: 'og:url', content: this.$route.fullPath},
          {hid: 'og:image', name: 'og:image', content: 'index.jpg'}
        ],
    }
  },
}
</script>

<style>

</style>
