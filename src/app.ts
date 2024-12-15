import Vuex from 'vuex'
import './app.css'

const store = new Vuex.Store({
  state: {
    thread: {},
  },
  mutations: {
    setThread: (thread: any) => {
      state.thread = { ...thread }
    },
  },
})

const App = {
  store,
  render(h: (arg0: string, arg1: any) => any) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  },
}

export default App