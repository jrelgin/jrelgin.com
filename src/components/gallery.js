import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './gallery.scss'

const SCRAPE_INSTA_QUERY = graphql`
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
    query={SCRAPE_INSTA_QUERY}
    render={({allInstaNode}) => (
      <>
        <section className="gallery">
          <h1>On Instagram</h1>
          <ul className="gallery-list">
            {allInstaNode.edges.map(edge => (
              <li key={edge.node.id}>
                <img className="insta-pic" src={edge.node.localFile.childImageSharp.fixed.src} alt=""/>
                <div className="caption"><span>{edge.node.caption}</span></div>                
              </li>
            ))}
          </ul>
        </section>
      </>
    )}
  />
)

export default Gallery
