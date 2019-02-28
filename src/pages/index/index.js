import Taro, { Component } from '@tarojs/taro'
import { View,Button } from '@tarojs/components'

import AddQuestion from './add-question'
import './index.less'

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {isShowModel: false}
    this.addQuestion = this.addQuestion.bind(this);
    this.cancelQuestion = this.cancelQuestion.bind(this);
  }

  config = {
    navigationBarTitleText: '问答小程序'
  }

  // 添加弹出浮层
  addQuestion() {
    this.setState({isShowModel: true})
  }
  // 关闭浮层
  cancelQuestion() {
    this.setState({isShowModel: false})
  }

  render () {
    return (
      <View className='index'>
        <View className='header-title'>问答示例</View>
        {this.state.isShowModel ? <AddQuestion onCancelQuestion={this.cancelQuestion} /> : null}

        <Button onClick={this.addQuestion} className='btn-question'>提问</Button>
      </View>
    )
  }
}

