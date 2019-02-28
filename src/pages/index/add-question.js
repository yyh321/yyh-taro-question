import Taro, {Component} from '@tarojs/taro'
import {View,Input, Textarea,Button} from '@tarojs/components'
import Dialog from './dialog'

import './add-question.less'

export default class AddQuestion extends Component {

  constructor(props) {
    super(props)

    this.handleCancelClick = this.handleCancelClick.bind(this)
  }

  handleCancelClick() {
    const {onCancelQuestion} = this.props
    onCancelQuestion()
  }
  render() {
    return (
      <Dialog>
        <View className='add-question'>
          <View className='question-container'>
            <Input className='question,question-title' placeholder='请输入问题标题' />
            <Textarea className='question,question-desc' placeholder='请输入问题描述' />
            <View className='btn-group'>
              <Button className='question-btn question-ok'>确定</Button>
              <Button onClick={this.handleCancelClick} className='question-btn'>取消</Button>
            </View>
          </View>
        </View>
      </Dialog>
    )
  }
}


