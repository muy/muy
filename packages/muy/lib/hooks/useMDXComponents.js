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

const useMDXComponents = () => ({
  a: Link,
  blockquote: Blockquote,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
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
