import React from 'react'
import { graphql } from 'gatsby'
import BlogPostTemplate from 'gatsby-theme-massively/src/components/blog-post'

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        description
        social {
          twitter
          facebook
          snapchat
          instagram
          medium
        }
        menuLinks {
          name
          link
        }
        contact {
          info
          email
          tel
          address
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
