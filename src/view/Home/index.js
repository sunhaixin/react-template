import React from 'react'
import { connect } from 'react-redux'
import './index.scss'

class Home extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <div>首页</div>
        <div>测试 redux： {this.props.testText}</div>
      </div>
    )
  }
}

export default connect(state => ({
  testText: state.global.testText
}))(Home)
