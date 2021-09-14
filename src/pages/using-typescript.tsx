// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <div></div>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
