import React from "react"
import Iframe from "../Iframe"

const EmbedGoogleMap = ({ apiKey, coordinates, ...props }) => (
  <Iframe
    allowFullScreen={true}
    src={`https://www.google.com/maps/embed/v1/place?q=${coordinates}&key=${apiKey}`}
    {...props}
  />
)

export default EmbedGoogleMap
