import store from "./index";
import Cookie from 'js-cookie'
import cookieparser from 'cookieparser'
import axios from 'axios'
export default {
    state: {
        visits: '',
        rating: '',
    },
    getters: {
        getVisits: (state) => {
            return state.visits
        },
        getRating: (state) => {
            return state.rating
        },
        getRatingById: (state) => (id) => {
          if(state.rating != undefined) {
            const rating = state.rating.split(',');
            const ratingInArray = rating.indexOf(''+id+'')
            return ratingInArray == -1 ? true : false
          }
          return true
        },
        getVisitById: (state) => (id) =>{
          if(state.visits != undefined) {
            const rating = state.visits.split(',');
            const ratingInArray = rating.indexOf('' + id + '');
            return ratingInArray == -1 ? true : false
          }
          return true
        }
    },
    mutations: {
        allRating: (state, payload) => {
            return state.rating = payload
        },
        allVisits: (state, payload) => {
            return state.visits = payload
        },
        pushRating: (state, payload) => {
            const rating = Cookie.get('rating') || '';
            Cookie.set('rating', rating + payload + ',')
            const vis = state.rating ? state.rating : ''
            return state.rating = vis + payload + ','
        },
        pushVisit: (state, payload) => {
            const visit = Cookie.get('visits') || ''
            Cookie.set('visits', visit + payload + ',')
            const vis = state.visits ? state.visits : ''
            return state.visits = vis + payload + ','
        }
    },
    actions: {
        addRating: ({commit, getters}, payload) => {
          const noRating = getters.getRatingById(payload.id);
          if (noRating) {
            axios.post('https://api.mirror-universe.ru/ratings/add', {
              id: payload.id,
              rating: payload.rating
            }).then((res) => {
              commit('pushRating', res.data)
            }).catch((err) => {
              console.log(err)
            })
          }

        },
        addVisit: ({commit, getters}, payload) => {
          const noVisit = getters.getVisitById(payload);
          if (noVisit) {
            axios.post('https://api.mirror-universe.ru/visits/add', {
              id: payload,
            }).then((res) => {
              commit('pushVisit', res.data)
            }).catch((err) => {
              console.log(err)
            })
          }

        },
        async nuxtServerInit({commit}, {req}) {
          if (req.headers.cookie) {
            const parse = cookieparser.parse(req.headers.cookie)
            commit('allRating', parse.rating)
            commit('allVisits', parse.visits)
          }
        }
    }
}
