import React from "react"
import Box from "@material-ui/core/Box"
import Video from "../Video"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles({
  root: {
    transform: "translate(-50%, -50%)",
    "@media screen and (max-aspect-ratio: 1920/1080)": {
      height: "100%",
    },
    "@media screen and (min-aspect-ratio: 1920/1080)": {
      width: "100%",
    },
  },
})

const BackgroundVideo = ({ props }) => {
  const classes = useStyles()
  return (
    <Box
      className={"MuyBackgroundVideoContainer"}
      height={"100vh"}
      left={0}
      overflow={"hidden"}
      position={"fixed"}
      top={0}
      width={"100vw"}
      zIndex={-1}
    >
      <Video
        autoPlay={true}
        // bottom={0}
        className={classes.root}
        display={"block"}
        left={"50%"}
        loop={true}
        // margin={"auto"}
        minHeight={"50%"}
        minWidth={"50%"}
        muted={true}
        overflow={"hidden"}
        position={"absolute"}
        // right={0}
        top={"50%"}
        zIndex={1}
        {...props}
      />
    </Box>
  )
}

export default BackgroundVideo
