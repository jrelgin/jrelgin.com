import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import itsme from '../images/itsme.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Jason Elgin`, `ux engineer`, `developer`]} />
    <div className="main">
      <h1>
        Hello, I’m Jason
      </h1>
      <p>coder, designer, experience engineer</p>    
      <div className="astro" style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img src={itsme} alt="jason"/>
      </div>
      <p><a href="https://twitter.com/jrelgin">@jrelgin</a></p>
    </div>
  </Layout>
)

export default IndexPage
