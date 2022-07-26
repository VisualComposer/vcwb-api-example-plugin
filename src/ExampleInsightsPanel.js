import React from 'react'

export default class ExampleInsightsPanel extends React.Component {
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
    window.vcwbEditorApi.subscribe('elementUpdate', this.handleLayoutChange)
  }

  componentWillUnmount () {
    window.clearInterval(this.layoutChangeInterval)
    window.vcwbEditorApi.unsubscribe('layoutChange', this.handleLayoutChange)
    window.vcwbEditorApi.unsubscribe('elementUpdate', this.handleLayoutChange)
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
        Custom Insights panel
        <p>Layout has {this.state.contentLength} words!</p>
      </div>
    )
  }
}