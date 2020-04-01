import authorMeta from "../meta/authorMeta"
import ogLocaleMeta from "../meta/ogLocaleMeta"
import ogUrlMeta from "../meta/ogUrlMeta"
import descriptionMeta from "../meta/descriptionMeta"
import distributionMeta from "../meta/distributionMeta"
import geoPositionMeta from "../meta/geoPositionMeta"
import geoPlaceNameMeta from "../meta/geoPlaceNameMeta"
import googleSiteVerificationMeta from "../meta/googleSiteVerificationMeta"
import keywordsMeta from "../meta/keywordsMeta"
import titleMeta from "../meta/titleMeta"
import geoRegionMeta from "../meta/geoRegionMeta"
import icbmMeta from "../meta/icbmMeta"
import ogSiteNameMeta from "../meta/ogSiteNameMeta"
import ogTypeMeta from "../meta/ogTypeMeta"
import articleSectionMeta from "../meta/articleSectionMeta"
import ogAudioMeta from "../meta/ogAudioMeta"
import ogDeterminerMeta from "../meta/ogDeterminerMeta"
import twitterCardMeta from "../meta/twitterCardMeta"
import twitterCreatorMeta from "../meta/twitterCreatorMeta"
import twitterSiteMeta from "../meta/twitterSiteMeta"
import twitterDescriptionMeta from "../meta/twitterDescriptionMeta"
import twitterTitleMeta from "../meta/twitterTitleMeta"
import twitterUrlMeta from "../meta/twitterUrlMeta"
import getImageMetaProps from "../getImageMetaProps"
import getVideoMetaProps from "../getVideoMetaProps"
import ogObjectTypeMeta from "../meta/ogObjectTypeMeta"
import fbAppIdMeta from "../meta/fbAppIdMeta"
import fbProfileIdMeta from "../meta/fbProfileIdMeta"
import twitterImageMeta from "../meta/twitterImageMeta"
import imageAltMeta from "../meta/imageAltMeta"
import revisitAfterMeta from "../meta/revisitAfterMeta"

const getMetaProps = (props = {}) => {
  let metaProps = {}

  const {
    articleSection,
    audio,
    author,
    description,
    determiner,
    distribution,
    fbAppId,
    fbProfileId,
    geoPlaceName,
    geoPosition,
    geoRegion,
    images = [],
    keywords,
    googleSiteVerification,
    locale,
    localeAlternate = [],
    revisitAfter,
    siteName,
    title,
    twitterCard,
    twitterCreator,
    twitterDescription = props.description,
    twitterImage = images && images[0],
    twitterSite,
    twitterTitle = props.title,
    type = "website",
    url,
    videos = [],
  } = props

  if (audio) {
    audio.url && (metaProps.ogAudio = ogAudioMeta({ content: audio.url }))
    audio.type &&
      (metaProps.ogAudioType = ogObjectTypeMeta({
        content: audio.type,
        type: "audio",
      }))
  }

  author && (metaProps.author = authorMeta({ content: author }))

  description &&
    (metaProps.description = descriptionMeta({ content: description }))
  determiner &&
    (metaProps.ogDeterminer = ogDeterminerMeta({ content: determiner }))
  distribution &&
    (metaProps.distribution = distributionMeta({ content: distribution }))

  fbAppId && (metaProps.fbAppId = fbAppIdMeta({ content: fbAppId }))

  fbProfileId &&
    (metaProps.fbProfileId = fbProfileIdMeta({ content: fbProfileId }))
  geoPlaceName &&
    (metaProps.geoPlaceName = geoPlaceNameMeta({ content: geoPlaceName }))

  if (geoPosition) {
    metaProps.geoPosition = geoPositionMeta(geoPosition)
    metaProps.icbm = icbmMeta(geoPosition)
  }

  geoRegion && (metaProps.geoRegion = geoRegionMeta({ content: geoRegion }))

  googleSiteVerification &&
    (metaProps.googleSiteVerification = googleSiteVerificationMeta({
      content: googleSiteVerification,
    }))

  keywords && (metaProps.keywords = keywordsMeta({ content: keywords, type }))

  images && Object.assign(metaProps, images.forEach(getImageMetaProps))

  if (locale) {
    metaProps.ogLocale = ogLocaleMeta({ alternate: false, content: locale })
    localeAlternate &&
      localeAlternate.forEach(
        (content, index) =>
          (metaProps[`ogLocaleAlternate${index}`] = ogLocaleMeta({
            alternate: true,
            content,
          }))
      )
  }

  revisitAfter &&
    (metaProps.revisitAfter = revisitAfterMeta({ content: revisitAfter }))

  siteName && (metaProps.ogSiteName = ogSiteNameMeta({ content: siteName }))
  title && (metaProps.title = titleMeta({ content: title }))

  twitterCard &&
    (metaProps.twitterCard = twitterCardMeta({ content: twitterCard }))

  twitterCreator &&
    (metaProps.twitterCreator = twitterCreatorMeta({ content: twitterCreator }))

  twitterDescription &&
    (metaProps.twitterDescription = twitterDescriptionMeta({
      content: twitterDescription,
    }))

  if (twitterImage) {
    twitterImage.alt &&
      (metaProps.twitterImageAlt = imageAltMeta({
        content: twitterImage.alt,
        schema: "twitter",
      }))
    twitterImage.url &&
      (metaProps.twitterImage = twitterImageMeta({ content: twitterImage.url }))
  }

  twitterSite &&
    (metaProps.twitterSite = twitterSiteMeta({ content: twitterSite }))

  if (type) {
    metaProps.ogType = ogTypeMeta({ content: type })
    articleSection &&
      (metaProps.articleSection = articleSectionMeta({
        content: articleSection,
      }))
  }

  twitterTitle &&
    (metaProps.twitterTitle = twitterTitleMeta({ content: twitterTitle }))

  if (url) {
    metaProps.ogUrl = ogUrlMeta({ content: url })
    metaProps.twitterUrl = twitterUrlMeta({ content: url })
  }

  videos && Object.assign(metaProps, videos.forEach(getVideoMetaProps))

  return metaProps
}

export default getMetaProps
