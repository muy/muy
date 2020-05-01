import PropTypes from "prop-types"

/**
 * The path to an image to be used as background for a tile
 * @param content
 * @return {{name: (*|string), content: *}}
 *
 * @example
 * <meta name="msapplication-TileImage" content="images/tile-144.png" />
 */
const applicationTileImageMeta = ({ content }) => ({
  content,
  name: content && "msapplication-TileImage",
})

export default applicationTileImageMeta

applicationTileImageMeta.propTypes = {
  content: PropTypes.object.isRequired,
}
