export const state = () => ({
  drawer: false
})

export const mutations = {
  changeDrawer(state){
    state.drawer = !state.drawer
  }
}
export const actions = {
  changeDrawer(state){
    state.commit('changeDrawer')
  }
}

export const getters = {
  getDrawer(state) {
    return state.drawer;
  }
}
