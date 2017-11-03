import apiService from '../lib/api'
import { browserHistory } from 'react-router'

export function getConversations (listing_id, bidder_id) {
  return function (dispatch) {
    return apiService.find('conversations/?include=users&filter[listing_id]=' + listing_id).then(res => {
      let found_conversations_id = null
      let conversations = res.data
      conversations.forEach((conversations) => {
        conversations.users.forEach((users) => {
          if (users.id == bidder_id) {
            found_conversations_id = conversations.id
          }

        })
      })
      if (found_conversations_id) {
        browserHistory.push('/messages')
      } else
        apiService.post('conversations', {
          listing_id: listing_id,
          bidder_id: bidder_id
        }).then(res => {
          browserHistory.push('/messages')
          return null
        })
    })
      .catch(error => {
        console.log('getBids err', error)
      })
  }
}
