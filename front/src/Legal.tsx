import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Footer from './Footer'
import Logo from './Logo'

const getPrivacy = () => (
  <>
    <p>
      At Basic Words, accessible from www.basic-words.com, one of our main
      priorities is the privacy of our visitors. This Privacy Policy document
      contains types of information that is collected and recorded by Basic
      Words and how we use it.
    </p>
    <p>
      If you have additional questions or require more information about our
      Privacy Policy, do not hesitate to contact us.
    </p>

    <p>
      This Privacy Policy applies only to our online activities and is valid for
      visitors to our website with regards to the information that they shared
      and/or collect in Basic Words. This policy is not applicable to any
      information collected offline or via channels other than this website. Our
      Privacy Policy was created with the help of the Free Privacy Policy
      Generator.
    </p>

    <b>Consent</b>
    <p>
      By using our website, you hereby consent to our Privacy Policy and agree
      to its terms.
    </p>
    <b>How we use your information</b>
    <p>We use the information we collect in various ways, including to:</p>

    <p>
      Provide, operate, and maintain our website Improve, personalize, and
      expand our website Understand and analyze how you use our website Develop
      new products, services, features, and functionality
    </p>
    <b>Log Files</b>
    <p>
      Basic Words follows a standard procedure of using log files. These files
      log visitors when they visit websites. All hosting companies do this and a
      part of hosting services' analytics. The information collected by log
      files include internet protocol (IP) addresses, browser type, Internet
      Service Provider (ISP), date and time stamp, referring/exit pages, and
      possibly the number of clicks. These are not linked to any information
      that is personally identifiable. The purpose of the information is for
      analyzing trends, administering the site, tracking users' movement on the
      website, and gathering demographic information.
    </p>
    <b>Google DoubleClick DART Cookie</b>
    <p>
      Google is one of a third-party vendor on our site. It also uses cookies,
      known as DART cookies, to serve ads to our site visitors based upon their
      visit to www.website.com and other sites on the internet. However,
      visitors may choose to decline the use of DART cookies by visiting the
      Google ad and content network Privacy Policy at the following URL –
      https://policies.google.com/technologies/ads
    </p>
    <b>Advertising Partners Privacy Policies</b>
    <p>
      You may consult this list to find the Privacy Policy for each of the
      advertising partners of Basic Words.
    </p>
  </>
)

const getTos = () => (
  <>
    <p>Lorem ipsum dolor sit amet</p>
  </>
)

const Legal: FC<{ type: string }> = ({ type }) => {
  const navigate = useNavigate()

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box width="100%" bgcolor="primary.main">
        <Logo
          onClick={() => {
            console.log('here')
            navigate('#')
          }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth="min(90%, 600px)"
        width="100%"
        textAlign="start"
        marginY={10}
      >
        <Typography variant="h1" color="primary.main" marginBottom={2}>
          {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
        </Typography>
        <Typography component="div" variant="body1" color="primary.main">
          {type === 'privacy' ? getPrivacy() : getTos()}
        </Typography>
      </Box>
      <Footer />
    </Box>
  )
}

export default Legal
