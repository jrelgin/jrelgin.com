import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Gallery from '../components/gallery'

const PhotoPage = () => (
  <Layout>
    <SEO title="Photos" />
    <Gallery></Gallery>
  </Layout>
)

export default PhotoPage
