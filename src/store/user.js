// 演示异步操作
import request from '@/utils/request'

function getTopicList() {
  return request({
    url: '/topics'
  }).then(res => res.data)
}

function setTopicList(data) {
  return {
    type: 'SET_TOPIC_LIST',
    data
  }
}

export const queryTopicList = () => {
  return (dispatch) => {
    getTopicList().then(res => {
      dispatch(setTopicList(res.data))
    }).catch(err => {
      console.log(err)
    })
  }
}

const defaultState = {
  topicList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TOPIC_LIST':
      return {
        ...state,
        topicList: action.data
      }
    default:
      return state
  }
}
