<template>
    <header class="header">
        <div class="header__top">
            <div class="wrapper wrapper_flex wrapper_jc">
                <div class="header__left">
                    <nuxt-link :to="'/'">
                        <div class="header__title">Зеркальная вселенная</div>
                        <div class="header__text">разрушение и созидание</div>
                    </nuxt-link>
                </div>
                <div class="header__right">
                    <div class="input__search">
                      <form :action="'/search'">
                        <input type="text"  v-model="search" name="q">
                        <button>
                          <i class="fa fa-search"></i>
                        </button>
                      </form>
                    </div>
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
            </div>
        </div>
        <div class="header__menu">
            <nav>
                <ul class="wrapper wrapper_flex wrapper_jc">
                    <nuxt-link :to="`/${item.alias}`" tag="li" class="menu__item" v-for="(item, key) in menu" :key="key">
                        <a>{{item.title}}</a>
                    </nuxt-link>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>

	import {mapGetters} from 'vuex'
    export default {
      name: "main-header",
      data() {
        return {
          search: ''
        }
      },
      computed: {
        ...mapGetters({
          menu: 'getMenu'
        })
      }
    }
</script>

<style>

</style>
