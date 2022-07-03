import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4pvg7sq2qie01z4hu986qak/master",
  cache: new InMemoryCache(),
})
