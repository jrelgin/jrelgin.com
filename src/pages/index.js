import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import itsme from '../images/itsme.jpg'
import Gallery from '../components/gallery'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Jason Elgin`, `ux engineer`, `developer`]} />
    <div className="main">
      <div className="astro" style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img src={itsme} alt="jason"/>
      </div>
      <p><a href="https://twitter.com/jrelgin">@jrelgin</a></p>

    </div>
    <Gallery></Gallery>
  </Layout>
)

export default IndexPage
