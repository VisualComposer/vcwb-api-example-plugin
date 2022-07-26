# API Demo plugin


## Commands
```
yarn install // Install all the element dependencies
yarn build // Builds development build
yarn build:dev // Builds developer build
```

## API

API is available in Visual Composer frontend editor (main window). All available options stored in global variable - `vcwbEditorApi` (`window.vcwbEditorApi`).


### Functions

- ### `mount`
  Render React component in places that are allowed by Visual Composer. Arguments: 1. mount key, 2. callback function that returns React component. Allowed mount keys: 
  - `panelInsights:third-party`.

   Example: 
   ```
   window.vcwbEditorApi.mount('panelInsights:third-party', () => {
     return <ExampleInsightsPanel />
   })
   ```
----------
- ### `addFilter`
  Adds filter to get or set data. Arguments: 1. filter key, 2. callback function with an argument of provided data for that filter, add key and value to object and return data if needed. Available filter points:
  - `saveRequestData` - will be called on saving the post/page, object data that will saved will be provided as an argument, any key with value can be added and returned to this object and will be saved in DB.
  To receive the passed key on PHP side there are events that are listening on editor loading ('vcv:dataAjax:getData') and saving ('vcv:dataAjax:setData'). On saving all passed values can be received through the request. To pass the values to the editor on load, they need to be added to the response array.
  
  Example: 
  ```
  window.vcwbEditorApi.addFilter('saveRequestData', (data) => {
    // Add custom key with any value
    data.exampleInsights = 'example insights value'
    // Return data
    return data
  })
  ```
  
  - `insightPanelsData` - will be called on insights panel opening, object data with information about insight panels will be provided, to insert custom panel add key and value to object and return it.
  
  Example: 
  ```
  window.vcwbEditorApi.addFilter('insightPanelsData', (data) => {
    data['third-party'] = {
      index: 1,
      type: 'third-party',
      title: 'Example Panel'
    }
    return data
  })
  ```
----------
- ### `subscribe` 
  Subscribe to events. Arguments: 1. event key, 2. callback function with an argument of provided data (if there is). Available events: 
   - `layoutChange` - will be called on layout change, data of the layout will be provided as an argument.
   - `elementUpdate` - will be called on existing element update, id and element provided as an argument.
   
   Example:
   
   ```
   window.vcwbEditorApi.subscribe('layoutChange', (data) => {
     console.log('layout has changed', data)
   })
  ```
   
   - `savedDataLoad` - will be called on post/page load after data is received, object data that was saved will be provided as an argument.
   
   Example: 
   ```
   window.vcwbEditorApi.subscribe('savedDataLoad', (data) => {
     // exampleInsights key which was provided in filter saveRequestData now is available here
     if (data.exampleInsights) {
        console.log(data.exampleInsights)
     }
   })
   ```
----------
- ### `unsubscribe`
  Unsubscribe from events. Arguments: 1. event key, 2. callback function that was previously subscribed.