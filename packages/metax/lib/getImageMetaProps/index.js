import imageAltMeta from "../meta/imageAltMeta"
import imageMeta from "../meta/imageMeta"
import ogObjectDimensionMeta from "../meta/ogObjectDimensionMeta"
import ogObjectTypeMeta from "../meta/ogObjectTypeMeta"

const getImageMetaProps = (image, index) => {
  const key = `image${key}`
  const metaProps = {}

  image.alt &&
    (metaProps[`${key}Alt`] = imageAltMeta({
      content: image.alt,
      schema: "og",
    }))

  image.height &&
    (metaProps[`${key}Height`] = ogObjectDimensionMeta({
      content: image.height,
      property: "height",
      type: "image",
    }))

  image.url && (metaProps[`${key}Url`] = imageMeta({ content: image.url }))

  image.type &&
    (metaProps[`${key}Type`] = ogObjectTypeMeta({
      content: image.type,
      type: "image",
    }))

  image.width &&
    (metaProps[`${key}Width`] = ogObjectDimensionMeta({
      content: image.width,
      property: "width",
      type: "image",
    }))

  return metaProps
}

export default getImageMetaProps
