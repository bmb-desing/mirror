import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
import Menu from './menu'
import Sidebar from './sidebar'
const store = () => new Vuex.Store({
    modules: {
        User,
        Menu,
        Sidebar
    }
})
export default store
