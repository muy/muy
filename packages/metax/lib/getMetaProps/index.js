import applicationNameMeta from "../meta/applicationNameMeta"
import applicationTapHighlightMeta from "../meta/applicationTapHighlightMeta"
import applicationTileImageMeta from "../meta/applicationTileImageMeta"
import applicationTooltipMeta from "../meta/applicationTooltipMeta"
import articleSectionMeta from "../meta/articleSectionMeta"
import authorMeta from "../meta/authorMeta"
import dcTitleMeta from "../meta/dcTitleMeta"
import descriptionMeta from "../meta/descriptionMeta"
import distributionMeta from "../meta/distributionMeta"
import fbAppIdMeta from "../meta/fbAppIdMeta"
import fbProfileIdMeta from "../meta/fbProfileIdMeta"
import formatDetectionMeta from "../meta/formatDetectionMeta"
import geoPlaceNameMeta from "../meta/geoPlaceNameMeta"
import geoPositionMeta from "../meta/geoPositionMeta"
import geoRegionMeta from "../meta/geoRegionMeta"
import getImageMetaProps from "../getImageMetaProps"
import getVideoMetaProps from "../getVideoMetaProps"
import googleSiteVerificationMeta from "../meta/googleSiteVerificationMeta"
import icbmMeta from "../meta/icbmMeta"
import imageAltMeta from "../meta/imageAltMeta"
import keywordsMeta from "../meta/keywordsMeta"
import mobileWebAppCapableMeta from "../meta/mobileWebAppCapableMeta"
import ogAudioMeta from "../meta/ogAudioMeta"
import ogDeterminerMeta from "../meta/ogDeterminerMeta"
import ogLocaleMeta from "../meta/ogLocaleMeta"
import ogObjectTypeMeta from "../meta/ogObjectTypeMeta"
import ogSiteNameMeta from "../meta/ogSiteNameMeta"
import ogTypeMeta from "../meta/ogTypeMeta"
import ogUrlMeta from "../meta/ogUrlMeta"
import revisitAfterMeta from "../meta/revisitAfterMeta"
import statusBarStyleMeta from "../meta/statusBarStyleMeta"
import themeColorMeta from "../meta/themeColorMeta"
import titleMeta from "../meta/titleMeta"
import twitterCardMeta from "../meta/twitterCardMeta"
import twitterCreatorMeta from "../meta/twitterCreatorMeta"
import twitterDescriptionMeta from "../meta/twitterDescriptionMeta"
import twitterImageMeta from "../meta/twitterImageMeta"
import twitterSiteMeta from "../meta/twitterSiteMeta"
import twitterTitleMeta from "../meta/twitterTitleMeta"
import twitterUrlMeta from "../meta/twitterUrlMeta"
import versionMeta from "../meta/versionMeta"

const getMetaProps = (props = {}) => {
  let metaProps = {}

  const {
    applicationName,
    applicationUrl = props.siteUrl,
    applicationTileImage,
    applicationTooltip = props.siteDescription,
    articleSection,
    audio,
    author,
    dcTitle = props.title,
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
    lang,
    locale,
    localeAlternate = [],
    revisitAfter,
    siteName,
    statusBarStyle,
    themeColor,
    title,
    twitterCard,
    twitterCreator,
    twitterDescription = props.description,
    twitterImage = images && images[0],
    twitterSite,
    twitterTitle = props.title,
    type = "website",
    url,
    version,
    videos = [],
  } = props

  if (applicationName) {
    metaProps.appleMobileWebCapable = mobileWebAppCapableMeta({
      content: "yes",
      name: "apple-mobile-web-app-capable",
    })
    metaProps.applicationName = applicationNameMeta({
      content: applicationName,
    })
    metaProps.applicationTapHighlight = applicationTapHighlightMeta({
      content: "no",
    })

    formatDetectionMeta.keyTypes.forEach((key) => {
      metaProps[`${key}FormatDetection`] = formatDetectionMeta({
        key,
        value: "no",
      })
    })

    metaProps.mobileWebAppTitle = applicationNameMeta({
      content: applicationName,
      name: "apple-mobile-web-app-title",
    })
    metaProps.mobileWebAppCapable = mobileWebAppCapableMeta({
      content: "yes",
    })
    metaProps.statusBarStyle = statusBarStyleMeta({
      content: statusBarStyle,
    })
  }

  if (applicationUrl) {
    metaProps.applicationStartUrl = applicationUrlMeta({
      content: applicationUrl,
      name: "msapplication-starturl",
    })
    metaProps.applicationUrl = applicationUrlMeta({
      content: applicationUrl,
    })
  }

  applicationTileImage &&
    (metaProps.applicationTileImage = applicationTileImageMeta({
      content: applicationTileImage,
    }))
  applicationTooltip &&
    (metaProps.applicationTooltip = applicationTooltipMeta({
      content: applicationTooltip,
    }))

  if (audio) {
    audio.url && (metaProps.ogAudio = ogAudioMeta({ content: audio.url }))
    audio.type &&
      (metaProps.ogAudioType = ogObjectTypeMeta({
        content: audio.type,
        type: "audio",
      }))
  }

  author && (metaProps.author = authorMeta({ content: author }))
  dcTitle && (metaProps.dcTitle = dcTitleMeta({ content: dcTitle, lang }))

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
  if (themeColor) {
    metaProps.applicationNavButtonColor = themeColorMeta({
      content: themeColor,
      name: "msapplication-navbutton-color",
    })
    metaProps.applicationTileColor = themeColorMeta({
      content: themeColor,
      name: "msapplication-TileColor",
    })
    metaProps.themeColor = themeColorMeta({ content: themeColor })
  }
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

  version && (metaProps.version = versionMeta({ content: version }))
  videos && Object.assign(metaProps, videos.forEach(getVideoMetaProps))

  return metaProps
}

export default getMetaProps
