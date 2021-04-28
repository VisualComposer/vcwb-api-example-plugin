import React, { useState } from 'react'
import ExampleInsightsPanel from './ExampleInsightsPanel'
import dataManager from './dataManager'

window.addEventListener('load', () => {
  window.vcwbEditorApi.subscribe('savedDataLoad', (data) => {
    if (data.exampleInsights && data.exampleInsights.contentLength) {
      dataManager.updateData(data.exampleInsights.contentLength)
    }
  })

  window.vcwbEditorApi.mount('panelInsights:third-party', () => {
    return <ExampleInsightsPanel
      key='panel-insights-example'
      getContentLength={dataManager.getContentLength}
    />
  })

  window.vcwbEditorApi.subscribe('layoutChange', () => { window.setTimeout(() => {
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
    const contentLength = getTextContent(layoutHTML).split(/\s+/).length

    dataManager.updateData(contentLength)
  }, 1000)})

  window.vcwbEditorApi.addFilter('saveRequestData', dataManager.saveRequestData)

  window.vcwbEditorApi.addFilter('insightPanelsData', (data) => {
    data['third-party'] = {
      index: 1,
      type: 'third-party',
      title: 'Example Panel'
    }
    return data
  })
})

