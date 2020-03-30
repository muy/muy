import React from "react"
import Box from "@material-ui/core/Box"
import clsx from "clsx"

const Video = ({ autoPlay, classes, className, loop, muted, ...props }) => (
  <Box
    autoPlay={autoPlay}
    className={clsx(classes, className)}
    component={"video"}
    loop={loop}
    muted={muted}
    {...props}
  />
)

export default Video
