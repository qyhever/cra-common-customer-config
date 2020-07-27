import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Button } from 'antd'
import { queryTopicList } from '@/store/user'

@connect(
  ({ user }) => ({ user }),
  { queryTopicList, push }
)
class Home extends Component {
  componentDidMount() {
    this.query()
  }
  query() {
    this.props.queryTopicList()
  }
  goAbout = () => {
    this.props.push('/about')
  }
  render() {
    console.log(this.props.user.topicList)
    return (
      <div>
        <Button type="primary" onClick={this.goAbout}>to about</Button>
        <ul>
          {this.props.user.topicList.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
