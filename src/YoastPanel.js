import React from 'react'

export default class YoastComponentClass extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contentLength: this.props.getContentLength()
    }

    this.handleLayoutChange = this.handleLayoutChange.bind(this)
    this.setContentLengthState = this.setContentLengthState.bind(this)
  }

  componentDidMount () {
    window.vcwbEditorApi.subscribe('layoutChange', this.handleLayoutChange)
  }

  componentWillUnmount () {
    window.clearInterval(this.layoutChangeInterval)
    window.vcwbEditorApi.unsubscribe('layoutChange', this.handleLayoutChange)
  }

  handleLayoutChange () {
    this.layoutChangeInterval = window.setInterval(this.setContentLengthState, 1100)
  }

  setContentLengthState () {
    this.setState({ contentLength: this.props.getContentLength() })
    window.clearInterval(this.layoutChangeInterval)
  }

  render () {
    return (
      <div className='vcv-ui-tree-content-section-inner'>
        Yoast panel
        <p>Layout has {this.state.contentLength} characters!</p>
      </div>
    )
  }
}