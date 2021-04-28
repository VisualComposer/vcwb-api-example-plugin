import React, { useState } from 'react'
import YoastPanel from './YoastPanel'

window.addEventListener('load', () => {
  const yoastManager = {
    yoastSavedData: {},
    layoutChange: () => {
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

      yoastManager.updateData(contentLength)
    },
    saveRequestData: (data) => {
      data.insightsYoast = yoastManager.yoastSavedData
      return data
    },
    updateData: (contentLength) => {
      yoastManager.yoastSavedData = {
        contentLength: contentLength
      }
    },
    getContentLength: () => {
      return yoastManager.yoastSavedData.contentLength
    }
  }

  window.vcwbEditorApi.subscribe('savedDataLoad', (data) => {
    console.log('data load', data)
    if (data.insightsYoast && data.insightsYoast.contentLength) {
      yoastManager.updateData(data.insightsYoast.contentLength)
    }
  })

  window.vcwbEditorApi.mount('panelInsights:yoast', () => {
    return <YoastPanel
      key='panel-insights-yoast'
      getContentLength={yoastManager.getContentLength}
    />
  })

  window.vcwbEditorApi.subscribe('layoutChange', () => { window.setTimeout(yoastManager.layoutChange, 1000)})

  window.vcwbEditorApi.addFilter('saveRequestData', yoastManager.saveRequestData)

  window.vcwbEditorApi.addFilter('insightPanelsData', (data) => {
    data.yoast = {
      index: 1,
      type: 'yoast',
      title: 'Yoast'
    }
    return data
  })
})

