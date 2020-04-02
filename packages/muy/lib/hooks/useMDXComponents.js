import Blockquote from "../Blockquote"
import Divider from "@material-ui/core/Divider"
import { H1, H2, H3, H4, H5, H6 } from "../Heading"
import Image from "../Image"
import Link from "@material-ui/core/Link"
import List from "@material-ui/core/List"
import ListItemWithText from "../ListItemWithText"
import Paragraph from "../Paragraph"
import Table from "@material-ui/core/Table"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import React from "react"

const useMDXComponents = () => ({
  a: Link,
  blockquote: Blockquote,
  h1: (props) => <H1 gutterBottom={true} {...props} />,
  h2: (props) => <H2 gutterBottom={true} {...props} />,
  h3: (props) => <H3 gutterBottom={true} {...props} />,
  h4: (props) => <H4 gutterBottom={true} {...props} />,
  h5: (props) => <H5 gutterBottom={true} {...props} />,
  h6: (props) => <H6 gutterBottom={true} {...props} />,
  hr: Divider,
  img: Image,
  li: ListItemWithText,
  p: Paragraph,
  table: Table,
  td: TableCell,
  tr: TableRow,
  ul: List,
})

export default useMDXComponents
