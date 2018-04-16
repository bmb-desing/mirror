<template>
  <div>
    <div class="search">
        По запросу <b>{{$route.query.q}}</b> найденно {{all || 0}} результата(ов)
    </div>
    <div class="post" v-if="!empty">
      <posts v-for="post in posts" :key="post.id" :post="post"></posts>
    </div>
    <div style="text-align: center;font-size: 20px;" v-else>По вашему запросу результатов не найдено</div>
    <nav id="pagination" class="paginator" v-if="count > 1">
    <ul class="page-numbers">
      <li v-if="currentPage != 1" class="first">
        <nuxt-link :to="{ path: '/search', query: { q: this.$route.query.q, page: '1' } }" @click.native="changePage(1)" exact>В начало</nuxt-link>
      </li>
      <li v-for="num in this.pageNumbers" v-if="num != null" >
        <nuxt-link v-if="num != $route.query.page && num != currentPage" :to="{ path: '/search', query: { q: query , page: num } }" @click.native="changePage(num)" exact>{{ num }}</nuxt-link>
        <span v-else>{{num}}</span>
      </li>
      <li v-if="currentPage != count" class="last">
        <nuxt-link :to="{ path: '/search', query: {  q: this.$route.query.q , page: count } }" @click.native="changePage(count)" exact>В конец</nuxt-link>
      </li>
    </ul>
    </nav>
  </div>
</template>
<script>
  import axios from 'axios'
  import Posts from '~/components/Post.vue'
    export default {
      components: {
        Posts
      },

      name: "search",
      asyncData ({ params, query,  error }) {
        const q = encodeURIComponent(query.q);
        if (!q) {
          error({ statusCode: 404, message: 'Категория не найдена' })
        }
        const page = query.page || 1;
        return axios.get('https://api.mirror-universe.ru/posts/search?q=' + q + '&page=' + page)
          .then((res) => {
            return { posts: res.data.posts, count: res.data.count, all: res.data.all, empty: false}
          })
          .catch((e) => {
            return { empty : true , count: 0 , all: 0}
          })
      },
      data () {
        return {
          query: this.$route.query.q,
          prevpage: null,
          nextpage: null,
          currentPage: null,
          pageNumbers: [],
          pageNumberCount: null,
        }
      },
      head()  {
        return {
          title: 'Поиск: ' + this.query,
          meta: [
            {hid: 'description', name: 'description' , itemprop: 'description', content: 'Поиск: ' + this.query },
            {hid: 'name', itemprop: 'name', name: 'name',  content: 'Поиск: ' + this.query },
            {hid: 'image', itemprop: 'image', name: 'image', content: '/search.jpg'},
            {hid: 'og:title', name: 'og:title', content: 'Поиск: ' + this.query },
            {hid: 'og:type', name: 'og:type', content: 'article'},
            {hid: 'og:url', name: 'og:url', content: this.$route.fullPath},
            {hid: 'og:image', name: 'og:image', content: '/search.jpg'}
          ]
        }
      },
      mounted () {
        this.setPageNumbers()
      },
      methods: {
        setPages (currentPage, totalPageCount) {
          this.pageNumbers = []
          this.prevpage = currentPage > 1 ? (currentPage - 1) : null
          if (!totalPageCount) {
            this.nextpage = this.$route.query.page ? (parseInt(this.$route.query.page) + 1) : 2
          } else {
            this.nextpage = currentPage < totalPageCount ? (parseInt(currentPage) + 1) : null
          }
          for (let i = 0; i < 7; i++) {
            let pages = ((currentPage) - 4) + i
            if (pages >= 1 && pages <= parseInt(this.count)){
              this.pageNumbers.push(pages)
              this.pageNumberCount++
            }
          }
        },
        setPageNumbers () {
          let _currentPage = this.$route.query.page ? this.$route.query.page : 1
          this.currentPage = _currentPage
          this.setPages(_currentPage, this.count)
        },
        changePage(num) {
          axios.get('https://api.mirror-universe.ru/posts?page='+num).then((data) => {
            this.posts = data.data.posts
          })
          this.setPageNumbers()
        }
      },
    }

</script>

<style>

</style>
