const geoPositionMeta = ({ latitude, longitude }) => ({
  content: `${latitude};${longitude}`,
  name: "geo.position",
})

export default geoPositionMeta
