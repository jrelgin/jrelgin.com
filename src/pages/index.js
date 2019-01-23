import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Jason Elgin`, `ux engineer`, `developer`]} />
    <div className="main">
      <h2>hello</h2>
      <p> <a href="https://twitter.com/jrelgin">@jrelgin</a></p>
      <div className="astro" style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>    
    </div>
   
  </Layout>
)

export default IndexPage
