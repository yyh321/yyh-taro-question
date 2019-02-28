import Taro, { Component } from '@tarojs/taro'
import { View,Button } from '@tarojs/components'

import AddQuestion from './add-question'
import './index.less'

function getStore(key) {
  let str = Taro.getStorageSync(key);
  if(!str) {
    return []
  }
  return JSON.parse(str);
}

function setStore(key, obj) {
  let str = obj
  if(typeof str =='object') {
    str = JSON.stringify(obj)
  }
  Taro.setStorageSync(key,str)
}

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {isShowModel: false,list:getStore('questions')}
    this.addQuestion = this.addQuestion.bind(this)
    this.cancelQuestion = this.cancelQuestion.bind(this)
    this.getQuestionData = this.getQuestionData.bind(this)
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

  // 获取问题内容
  getQuestionData(question){
    this.setState({
      list:[...this.state.list,question]
    },() => {
      setStore('questions',this.state.list)
    })
  }

  render () {
    return (
      <View className='index'>
        <View className='header-title'>问答示例</View>
        <View className='container'>
          {
            this.state.list.map(item => {
              return (
                <View className='question-item' key={item.id}>
                  <View className='question-item-title'>{item.title}</View>
                  <View className='question-item-des'>{item.des}</View>
                </View>
              )
            })
          }
        </View>
        {this.state.isShowModel ? <AddQuestion onGetQuestionData={this.getQuestionData} onCancelQuestion={this.cancelQuestion} /> : null}
        <Button onClick={this.addQuestion} className='btn-question'>提问</Button>
      </View>
    )
  }
}

