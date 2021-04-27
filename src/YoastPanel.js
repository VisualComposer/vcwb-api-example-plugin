import React from 'react'

export default class YoastComponentClass extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      layoutChangedCount: (props.yoastSavedData && props.yoastSavedData.layoutChangedCount) ? parseInt(props.yoastSavedData.layoutChangedCount) : 0,
      contentLength: (props.yoastSavedData && props.yoastSavedData.contentLength) ? parseInt(props.yoastSavedData.contentLength) : 0
    }

    this.handleLayoutChange = this.handleLayoutChange.bind(this)
  }

  componentDidMount () {
    window.vcwbEditorApi.subscribe('layoutChange', this.handleLayoutChange)

    window.vcwbEditorApi.addFilter('saveRequestData', (data) => {
      data.insightsYoast = {
        layoutChangedCount: this.state.layoutChangedCount,
        contentLength: this.state.contentLength
      }
      return data
    })
  }

  getTextContent (data) {
    data = data
      .replace(/\s*\bdata-vcv-[^"<>]+"[^"<>]+"+/g, '')
      .replace(/<!--\[vcvSourceHtml]/g, '')
      .replace(/\[\/vcvSourceHtml]-->/g, '')
      .replace(/<\//g, ' </')
    // .replace(/&quot;/g, "'")
    const range = document.createRange()
    const documentFragment = range.createContextualFragment(data)

    let helper = documentFragment.querySelector('style, script, noscript, meta, title, .vcv-ui-blank-row-container, .vcv-row-control-container')

    while (helper) {
      const parentNode = helper.parentNode
      parentNode.removeChild(helper)
      helper = documentFragment.querySelector('style, script, noscript, meta, title, .vcv-ui-blank-row-container, .vcv-row-control-container')
    }

    return documentFragment.textContent.trim()
  }

  handleLayoutChange () {
    const layoutHTML = document.getElementById('vcv-editor-iframe').contentWindow.document.querySelector('.vcv-layouts-html').innerHTML
    const contentLength = this.getTextContent(layoutHTML).split(/\s+/).length
    const newCount = this.state.layoutChangedCount + 1

    this.setState({
      layoutChangedCount: newCount,
      contentLength: contentLength
    })
  }

  render () {
    return (
      <div className='vcv-ui-tree-content-section-inner'>
        Yoast panel.
        <p>Layout changed {this.state.layoutChangedCount} times!</p>
        <p>Layout has {this.state.contentLength} characters!</p>
      </div>
    )
  }
}