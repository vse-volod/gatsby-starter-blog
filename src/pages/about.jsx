import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
// import Layout from '../components/layout'
import Layout from 'gatsby-theme-massively/src/components/layout'
import '../styles/main.css'

class About extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
        />

        <section>
          <header className="main content">
            <h1>About</h1>
          </header>
          <div className="content">We are awesome</div>
        </section>
      </Layout>
    )
  }
}

export default About

