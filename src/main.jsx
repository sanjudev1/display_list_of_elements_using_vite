import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// import { ApolloProvider,ApolloClient,InMemoryCache ,createHttpLink} from '@apollo/client'


// const httpLink= createHttpLink({
//   uri:"https://khoros-graphql-api.vercel.app/api/graphql"
// })
// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ApolloProvider client={client}> */}
    <App />
    {/* </ApolloProvider> */}
   
  </React.StrictMode>,
)
