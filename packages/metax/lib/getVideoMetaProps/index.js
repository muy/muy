import ogObjectDimensionMeta from "../meta/ogObjectDimensionMeta"
import ogVideoMeta from "../meta/ogVideoMeta"

const getVideoProps = (video, index) => {
  let metaProps = {}

  const key = `ogVideo${index}`
  video.height &&
    (metaProps[`${key}Height`] = ogObjectDimensionMeta({
      content: video.height,
      property: "height",
      type: "video",
    }))
  video.url && (metaProps.ogVideo = ogVideoMeta({ content: video.url }))
  video.width &&
    (metaProps[`${key}Width`] = ogObjectDimensionMeta({
      content: video.width,
      property: "width",
      type: "video",
    }))

  return metaProps
}

export default getVideoProps
