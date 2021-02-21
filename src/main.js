import { createApp } from 'vue'
import App from './App.vue'

// import ApolloClient from "apollo-client";
// import { HttpLink } from "apollo-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";

// import VueApollo from "vue-apollo";

// const getHeaders = () => {
//   const headers = {};
//    const token = window.localStorage.getItem('apollo-token');
//    if (token) {
//      headers.authorization = `Bearer ${token}`;
//    }
//    return headers;
//  };
//  // Create an http link:
//  const link = new HttpLink({
//    uri: 'https://hasura.io/learn/graphql',
//    fetch,
//    headers: getHeaders()
//  });
//  const client = new ApolloClient({
//    link: link,
//    cache: new InMemoryCache({
//      addTypename: true
//    })
//  });

// const apolloProvider = new VueApollo({
//   defaultClient: client,
// })

// App.use(VueApollo);
// App.use(apolloProvider)

createApp(App).mount('#app')
