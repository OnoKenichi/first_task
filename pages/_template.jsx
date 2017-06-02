import React from 'react'
import { Link } from 'react-router'
import { Container, Grid, Span } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include'
import { colors, activeColors } from 'utils/colors'

import typography from 'utils/typography'
import { config } from 'config'

// Import styles.
import 'css/main.css'
import 'css/github.css'

const { rhythm, adjustFontSizeTo } = typography

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.object,
    }
  },
  render () {
    const docsActive = includes(this.props.location.pathname, '/docs/')
    const examplesActive = includes(this.props.location.pathname, '/examples/')

    return (
      <div>
        <div
          style={{

            color: colors.fg,
            marginBottom: rhythm(1.5),
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingLeft: rhythm(3/4),
            }}
          >
            <Grid
              columns={12}
              style={{
                padding: `${rhythm(3/4)} 0`,
              }}
            >

              <Span
                columns={4}
                style={{
                  height: 24, // Ugly hack. How better to constrain height of div?
                }}
              >
                <Link
                  to={prefixLink('tel:6788272782')}
                  style={{
                    textDecoration: 'none',
                    color: colors.fg,
                                     }}
                >
                  678-827-2782
                </Link>
              </Span>

                  <Span columns={8} last>
                  <a
                    style={{
                      float: 'left',
                      color: colors.fg,
                      textDecoration: 'none',
                      marginLeft: rhythm(1/2),
                    }}
                    href="mailto:hellohello@knotel.com ">
                hellohello@knotel.com
              </a>
                                    </Span>
                <Link
                  to={prefixLink('')}
                  style={{
                    color: examplesActive ? activeColors.fg : colors.fg,
                    float: 'right',
                    textDecoration: 'none',
                    paddingLeft: rhythm(1/2),
                    paddingRight: rhythm(1/2),
                    paddingBottom: rhythm(3/4),
                    marginBottom: rhythm(0),
                    marginTop: rhythm(-1),
                  }}
                >
                 Log in
                </Link>

            </Grid>
          </Container>
        </div>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
