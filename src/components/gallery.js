import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const SCRAP_INSTA_QUERY = graphql`
  query instaQuery {
    allInstaNode {
      edges {
        node {
          id
          caption
          localFile {
            childImageSharp {
              fixed(width: 600, height: 600) {
                src
              }
            }
          }
        }
      }
    }
  }
`
const Gallery = () => (
  <StaticQuery
    query={SCRAP_INSTA_QUERY}
    render={({allInstaNode}) => (
      <>
        <section className="gallery">
          <h3>On Instagram</h3>
          <ul>
            {allInstaNode.edges.map(edge => (
              <li key={edge.node.id}>
                <img src={edge.node.localFile.childImageSharp.fixed.src} alt=""/>
                <span className="caption">{edge.node.caption}</span>
              </li>
            ))}
          </ul>
        </section>
      </>
    )}
  />
)

export default Gallery
