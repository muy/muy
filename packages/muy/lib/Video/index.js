import React from "react"
import Box from "@material-ui/core/Box"
import clsx from "clsx"

const Video = ({
  autoPlay,
  classes,
  className,
  display,
  loop,
  muted,
  ...props
}) => (
  <Box
    autoPlay={autoPlay}
    className={clsx(classes, className)}
    component={"video"}
    display={display}
    loop={loop}
    muted={muted}
    {...props}
  />
)

export default Video

Video.defaultProps = {
  display: "inline-block",
}
