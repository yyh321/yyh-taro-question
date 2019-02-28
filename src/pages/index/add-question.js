import Taro, {Component} from '@tarojs/taro'
import {View,Input, Textarea,Button} from '@tarojs/components'
import Dialog from './dialog'

import './add-question.less'

export default class AddQuestion extends Component {

  constructor(props) {
    super(props)
    this.state={
      title: '',
      des: ''
    }

    this.handleCancelClick = this.handleCancelClick.bind(this)
    this.handleConfirmClick = this.handleConfirmClick.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleQuestionContentChange = this.handleQuestionContentChange.bind(this)
  }

  // 点击取消关闭窗口
  handleCancelClick() {
    const {onCancelQuestion} = this.props
    onCancelQuestion()
  }

  // 点击确定
  handleConfirmClick() {
    const title = this.state.title.trim()
    const des = this.state.des.trim()
    if(!title || !des) {
      Taro.showToast({
        title: '请填写标题或问题',
        icon: 'none',
        duration: 2000
      })
      return
    }
    const {onGetQuestionData} = this.props
    onGetQuestionData({id:parseInt(Math.random()*10000),title:this.state.title, des: this.state.des});
    Taro.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000,
      success:()=>{
        this.handleCancelClick()
      }
    })
  }

  // 标题输入
  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  // 问题内容输入
  handleQuestionContentChange(e) {
    this.setState({des: e.target.value})
  }

  render() {
    return (
      <Dialog>
        <View className='add-question'>
          <View className='question-container'>
            <Input onInput={this.handleTitleChange} className='question,question-title' placeholder='请输入问题标题' />
            <Textarea onInput={this.handleQuestionContentChange} className='question,question-desc' placeholder='请输入问题描述' />
            <View className='btn-group'>
              <Button onClick={this.handleConfirmClick} className='question-btn question-ok'>确定</Button>
              <Button onClick={this.handleCancelClick} className='question-btn'>取消</Button>
            </View>
          </View>
        </View>
      </Dialog>
    )
  }
}


