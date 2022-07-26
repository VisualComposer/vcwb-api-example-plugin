import React from 'react'
import ExampleInsightsPanel from './ExampleInsightsPanel'
import dataManager from './dataManager'

window.addEventListener('load', () => {
  const getContentLength = () => {
    const layoutHTML = document.getElementById('vcv-editor-iframe').contentWindow.document.querySelector('.vcv-layouts-html').innerHTML
    const getTextContent = (data) => {
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

    return getTextContent(layoutHTML).split(/\s+/).length
  }

  /**
   * Subscribes to event when data for post/page is received after load.
   * Setups dataManager data values
   */
  window.vcwbEditorApi.subscribe('savedDataLoad', (data) => {
    if (data.exampleInsights && data.exampleInsights.contentLength) {
      dataManager.updateData(data.exampleInsights.contentLength)
    }
  })
  /**
   * Subscribes to layout change(content of the page) event, data of the layout will be provided as an argument
   */
  window.vcwbEditorApi.subscribe('layoutChange', (data) => {
    window.setTimeout(() => {
      const contentLength = getContentLength()
      dataManager.updateData(contentLength)
    }, 1000)
  })

  /**
   * Subscribes to element update event, arguments -> id, element
   */
  window.vcwbEditorApi.subscribe('elementUpdate', (id, element) => {
    window.setTimeout(() => {
      const contentLength = getContentLength()
      dataManager.updateData(contentLength)
    }, 1000)
  })

  /**
   * Filters save data object
   */
  window.vcwbEditorApi.addFilter('saveRequestData', dataManager.saveRequestData)
  /**
   * Render panel React component in places that are allowed by Visual Composer panelInsights:third-party
   */
  window.vcwbEditorApi.mount('panelMessages:third-party', () => {
    return <ExampleInsightsPanel
      key='panel-messages-example'
      getContentLength={dataManager.getContentLength}
    />
  })
  /**
   * Filters the list of panels by adding one more option which will open on picking panelInsights:third-party mount point
   */
  window.vcwbEditorApi.addFilter('insightPanelsData', (data) => {
    data['third-party'] = {
      index: 1,
      type: 'third-party',
      title: 'Example Panel',
      icon: 'yoast-small' // icon list are predefined in plugin core
    }
    return data
  })
})

