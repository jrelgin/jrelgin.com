import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const Gallery = () => (
  <StaticQuery
    query={graphql`
      query instaQuery {
        allInstaNode {
          edges {
            node {
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
    `}
    render={({allInstaNode}) => (
      <>
        <section className="gallery">
          <h3>On Instagram</h3>
          {allInstaNode.edges.map(edge => (
            <li>
              <img src={edge.node.localFile.childImageSharp.fixed.src} alt=""/>
              <span className="caption">{edge.node.caption}</span>
            </li>
          ))}
        </section>
      </>
    )}
  />
)

export default Gallery
