import React, { useState } from 'react'
import YoastPanel from './YoastPanel'

window.addEventListener("load", () => {
  const yoastSavedData = {}

  window.vcwbEditorApi.subscribe('savedDataLoad', (data) => {
    yoastSavedData.insightsYoast = data.insightsYoast
  })

  window.vcwbEditorApi.mount('panelInsights:yoast', () => {
    return <YoastPanel yoastSavedData={yoastSavedData.insightsYoast} key={`panel-insights-yoast`} />
  })

  window.vcwbEditorApi.addFilter('insightPanelsData', (data) => {
    data.yoast = {
      index: 1,
      type: 'yoast',
      title: 'Yoast'
    }
    return data
  })
})

