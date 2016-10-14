import React, { Component } from 'react'
import Radium from 'radium'
import ReactEasyEmoji from 'react-easy-emoji'

const options = {
  baseUrl: '//twemoji.maxcdn.com/2/svg/',
  ext: '.svg',
  size: ''
}

class Emoji extends Component {
  render() {
    return (
      <div>
        {ReactEasyEmoji(this.props.children, options)}
      </div>
    )
  }
}

export default Radium(Emoji)
