import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: [
    {id:1,name:'衣服',price:69.9,count:5},
    {id:2,name:'裤子',price:29.9,count:15},
    {id:3,name:'鞋子',price:19,count:25},
  ],
  getters: {
    getDataById:state=>id=>state.find(item=>item.id==id)
  },
  mutations: {
    add(state,form){
      state.push(form)
    },
    edit(state,{id,form}){
      state[
        state.findIndex(item => item.id == id)
      ] = form
    },
    del(state,id){
      state.splice(state.findIndex(item => item.id == id),1)
    }
  },
  actions: {
    add({commit},form){
      commit('add',form);
    },
    edit({commit},{id,form}){
      commit('edit',{id,form});
    },
    del({commit},id){
      commit('del',id)
    }
  },
  modules: {
  }
})
