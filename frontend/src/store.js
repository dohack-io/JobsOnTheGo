import Vue from 'vue'
import Vuex from 'vuex'
import api from '../libraries/jobs'
// import api from '../libraries/jsonboxjobs'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    allJobs: [],
    usersJobs: [],
    currentJob: { srcAdress: { lat:5, lon:5 }, dstAdress: { lat:5, lon:5 }},
    currentUser: {},
    notifications: [],
    deliveryTypes: []
  },
  mutations: {
    setAllJobs: (state, data) => {
      state.allJobs = data
    },
    setUsersJobs: (state, data) => {
      state.usersJobs = data
    },
    setCurrentJob: (state, data) => {
      state.currentJob = data
    },
    setCurrentUser: (state, data) => {
      state.currentUser = data
    },
    addNotification: (state, data) => {
      state.notifications.push(data)
    },
    removeNotification: (state, data) => {
      state.notifications.splice(data, 1)
    }
  },
  actions: {
    async fetchAllJobs({ commit }, data) {
      const jobs = await api.fetchAllJobs(data)
      commit('setAllJobs', jobs)
      return jobs
    },
    async fetchUsersJobs({ commit }, data) {
      const jobs = await api.fetchUsersJobs(data)
      commit('setUsersJobs', jobs)
      return jobs
    },
    async createJob({ commit }, data) {
      return await api.createJob(data)
    },
    async readJob({ commit }, data) {
      const job = await api.readJob(data)
      commit('setCurrentJob', job)
      return job
    },
    async createUser({ commit }, data) {
      const res = await api.createUser(data)
      commit('setCurrentUser', { ...data, id: res.data })
      return res
    },
    async addNotification({ commit }, data) {
      commit('addNotification', data)
    },
    async removeNotification({ commit }, data) {
      commit('removeNotification', data)
    },
    async readScooters({ commit }, data) {
      return await api.readScooters(data)
    }
  }
})
