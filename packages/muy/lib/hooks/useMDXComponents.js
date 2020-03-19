import Blockquote from "../Blockquote"
import Divider from "@material-ui/core/Divider"
import Heading from "../Heading"
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
  h1: Heading(1),
  h2: Heading(2),
  h3: Heading(3),
  h4: Heading(4),
  h5: Heading(5),
  h6: Heading(6),
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
