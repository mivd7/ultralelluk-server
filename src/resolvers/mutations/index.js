const {CalendarMutations} = require('./Calendar')
const {GigMutations} = require('./Gig')
const {PostMutations} = require('./Post')
const {MediaMutations} = require('./Media')
const {UserMutations} = require('./User')

const mutations = {
  CalendarMutations,
  GigMutations,
  PostMutations,
  UserMutations,
  MediaMutations
}

module.exports = {mutations}