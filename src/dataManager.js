/**
* Data manager provides setter and getter for information about content length
*/
const dataManager = {
  savedData: {},
  saveRequestData: (data) => {
    data.exampleInsights = dataManager.savedData
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
