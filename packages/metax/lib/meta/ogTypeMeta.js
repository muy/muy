const defaultProps = {
  content: "website",
}

/**
 * @param {"actor"|"article"|"author"|"blog"|"book"|"city"|"company"|"country"|"food"|"game"|"hotel"|"movie"|"music:song"|"music.album"|"music.playlist"|"music.radio_station"|"politician"|"profile"|"restaurant"|"video.movie"|"video.episode"|"video.tv_show"|"video.other"|"website"} content
 */
const ogTypeMeta = ({ content } = defaultProps) => ({
  content,
  property: "og:type",
})

export default ogTypeMeta

ogTypeMeta.defaultProps = defaultProps
