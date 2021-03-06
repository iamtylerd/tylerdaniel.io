import React from 'react'
import Link from 'gatsby-link'

import './index.scss'


const BlogPage = ({data}) =>
  <div className="">
    <p>Hi People</p>
    {data.allMarkdownRemark.edges.map((post) => {
      return <div key={post.node.id}>
              <Link to={post.node.frontmatter.path}>
                <h3>{post.node.frontmatter.title}</h3>
              </Link>
            </div>
    })}
  </div>

export const pageQuery = graphql`
  query BlogQuery {
      allMarkdownRemark(
        limit: 10
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              path
              date
            }
          }
        }
    }
  }
`


export default BlogPage
