const dataManager = {
  savedData: {},
  saveRequestData: (data) => {
    data.insightsYoast = dataManager.savedData
    return data
  },
  updateData: (contentLength) => {
    dataManager.savedData = {
      contentLength: contentLength
    }
  },
  getContentLength: () => {
    return dataManager.savedData.contentLength
  }
}

export default dataManager