const {CalendarQueries} = require('./Calendar')
const {GigQueries} = require('./Gig')
const {PostQueries} = require('./Post')
const {MediaQueries} = require('./Media')
const {UserQueries} = require('./User')

const queries = {
  CalendarQueries,
  GigQueries,
  PostQueries,
  UserQueries,
  MediaQueries
}

module.exports = {queries}