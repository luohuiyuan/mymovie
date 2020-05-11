import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hideTabbar:true,
    headerTitle:'我的电影',
    comingList:[],
    backShow:false
  },
  mutations: {//唯一修改状态位置
    HideTabbar(state,data){
      state.hideTabbar=data
    },
    ShowTabbar(state,data){
      state.hideTabbar=data
    },
    changeTitle(state,payload){
      console.log(payload)
      state.headerTitle=payload
    },
    comingListMutations(state,data){
      state.comingList=data
    },
    backStatus(state,data){
      state.backShow=data
    }
  },
  actions: {//异步处理 action 提交的是 mutation，而不是直接变更状态。
    comingListAction(store){
      axios({
        url:'/movie/coming_soon?apikey=0df993c66c0c636e29ecbb5344252a4a',
      }).then(res=>{
        console.log(res.data)
        store.commit("comingListMutations",res.data.subjects)
      })
    }
  },
  modules: {
  }
})
