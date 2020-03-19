import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

const ListItemWithText = props => (
  <ListItem>
    <ListItemText {...props} />
  </ListItem>
)

export default ListItemWithText
