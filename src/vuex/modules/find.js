// import { } from '../mutation-types'
import {
    SET_FIND_FRIENDS_LIST,
} from '../mutation-types'


let state = {
    iframe_url:'',
    iframe_title:'',
    friends: []
}
const mutations = {
    ['SET_IFRAME_URL'](state,urlObj){
        state.iframe_url = urlObj.url
        state.iframe_title = urlObj.title
    },
     [SET_FIND_FRIENDS_LIST](state, list) {
        state.friends = list
    }
}

export default {
  state,
  mutations
}