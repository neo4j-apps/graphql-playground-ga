import React from 'react'
import { Provider } from 'react-redux'
import { Playground, store } from 'graphql-playground-react'

const workspaceQuery = `
# Projects in the current workspace
query {
  workspace {
    projects {
      name
    }
  }
}
`

const sendMetricsMutation = `
# Send metrics about some event
mutation {
  sendMetrics(event:{
    category: "prototype",
    label: "initialized",
    properties: [
      {
        name:"developer",
        value:"graphmaster@somewhere.com"
      }
    ]
  })
}`

function App() {
  const url = new URL(window.location.href);
  // Url of a graphQL endpoint
  const apiEndpoint = url.searchParams.get('neo4jDesktopApiUrl');
  // A Desktop generated token to verify the provided appId
  const apiClientId = url.searchParams.get('neo4jDesktopGraphAppClientId');

  return (
    <Provider store={store}>
      <Playground 
        endpoint={apiEndpoint}
        tabs={[
          {
            name: "List Projects",
            endpoint:apiEndpoint, 
            query:workspaceQuery,
            headers: {
              clientId: apiClientId
            }
          },
          {
            name: "Send Metrics",
            endpoint:apiEndpoint, 
            query:sendMetricsMutation,
            headers: {
              clientId: apiClientId
            }
          }
        ]} 
      />
    </Provider>
  );
}

export default App;
