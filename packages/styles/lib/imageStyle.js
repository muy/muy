import objectFitCover from "./objectFitCover";

const imageStyle = theme => ({
    root: {
        height: "auto",
        margin: `0 0 ${theme.spacing(3)}px`,
        maxWidth: "100%",
        padding: 0,
    },
    cover: objectFitCover,
})

export default imageStyle
