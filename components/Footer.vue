<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__left">
        <ul>
          <nuxt-link :to="`/${item.alias}`" tag="li" class="menu__item" v-for="(item, key) in menu" :key="key">
            <a>{{item.title}}</a>
          </nuxt-link>
        </ul>
      </div>
      <div class="footer__center">
        <div class="footer__top">
          <a href="https://vk.com/public164569236" target="_blank" class="header__social">
            <i class="fa fa-vk" aria-hidden="true"></i>
          </a>
          <a href="https://t.me/zerkalnaya_vselenayaa" target="_blank" class="header__social">
            <i class="fa fa-telegram" aria-hidden="true"></i>
          </a>
          <a href="#" target="_blank" class="header__social">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
        <div class="footer__middle">

        </div>
        <div class="footer__bottom">
          <div>
            <nuxt-link :to="'/ask'">Задать вопрос</nuxt-link>
          </div>
          <div>
            <nuxt-link :to="'/partners'">Наши партнеры</nuxt-link>
          </div>
        </div>
      </div>
      <div class="footer__right">
        <div class="footer__advertising">

          <iframe src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0%20%22%D0%97%D0%B5%D1%80%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%B2%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F%22&targets-hint=&default-sum=10&button-text=11&hint=&successURL=&quickpay=shop&account=410012476009127" width="450" height="185" frameborder="0" allowtransparency="true" style="max-width: 100%;" scrolling="no"></iframe>
        </div>
      </div>
    </div>

  </footer>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
      name: 'my-footer',
      computed: {
        ...mapGetters({
            menu: 'getMenu'
        })
      }
  }
</script>
