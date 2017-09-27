import React from 'react'
import Link from 'gatsby-link'
import Particles from 'react-particles-js';


import './index.scss'


const IndexPage = () =>
  <div className="">
    <Particles width="100%" height="100%" params={{
            		particles: {
                  number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 800
                  },
                  color: {
                  value: "#ffffff"
                  }
                },
            			shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000"
                  },
                  polygon: {
                    nb_sides: 5
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                  }
                },
                line_linked: {
            				shadow: {
            					enable: true,
            					color: "grey",
            					blur: 5
            				}
            			}
            		}
            	}}/>
    <p>Hi People</p>
  </div>

export const pageQuery = graphql`
  query IndexQuery {
      allMarkdownRemark(limit: 10) {
        edges {
          node {
            frontmatter {
              title
              path
            }
          }
        }
    }
  }
`


export default IndexPage
