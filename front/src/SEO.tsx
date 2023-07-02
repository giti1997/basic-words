import React from 'react'
import { Helmet } from 'react-helmet'
import { useIntl } from 'react-intl'

const SEO = ({
  page,
  iso,
  isoList,
}: {
  page: string
  iso: string
  isoList: string[]
}) => {
  const intl = useIntl()

  if (page === 'home') {
    const title = intl.formatMessage({ id: 'title-html' })
    const description = intl.formatMessage({ id: 'subtitle' })
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:type" content={'website'} />
        <meta name="og:url" content={'https://basic-words.com'} />
        {/* <meta name="og:locale" content={'en_US'} /> */}
        <meta name="og:description" content={description} />
        {isoList.map(
          (newIso) =>
            newIso !== iso && (
              <link
                rel="alternate"
                key={newIso}
                href={`https://basic-words.com/${newIso}`}
                hrefLang={newIso}
              />
            )
        )}
      </Helmet>
    )
  } else {
    return (
      <Helmet>
        <title>{`${page} - ebookcompressor.com`}</title>
      </Helmet>
    )
  }
}

export default SEO
