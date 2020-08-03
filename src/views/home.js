import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import request from '@/utils/request'
import { Button } from 'antd'

@connect()
class Home extends Component {
  componentDidMount() {
    this.query()
  }
  query() {
    request('/e-admin/user')
      .then(console.log)
  }
  goAbout = () => {
    this.props.dispatch(push('/about'))
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.goAbout}>
          to about
        </Button>
      </div>
    )
  }
}

export default Home
