import { baseTypography } from "@muy/styles"
import MuiButton from "@muy/styles/lib/MuiButton"
import MuiContainer from "@muy/styles/lib/MuiContainer"
import MuiCssBaseline from "@muy/styles/lib/MuiCssBaseline"
import MuiDivider from "@muy/styles/lib/MuiDivider"
import MuiFormGroup from "@muy/styles/lib/MuiFormGroup"
import MuiInput from "@muy/styles/lib/MuiInput"
import MuiInputBase from "@muy/styles/lib/MuiInputBase"
import MuiLink from "@muy/styles/lib/MuiLink"
import MuiList from "@muy/styles/lib/MuiList"
import MuiListItem from "@muy/styles/lib/MuiListItem"
import MuiOutlinedInput from "@muy/styles/lib/MuiOutlinedInput"
import MuiSelect from "@muy/styles/lib/MuiSelect"
import MuiTable from "@muy/styles/lib/MuiTable"
import MuiTableCell from "@muy/styles/lib/MuiTableCell"
import MuiTableHead from "@muy/styles/lib/MuiTableHead"
import MuiToolbar from "@muy/styles/lib/MuiToolbar"
import MuiTypography from "@muy/styles/lib/MuiTypography"

const getThemeOptions = ({ baseTheme }) => ({
  ...baseTheme,
  typography: {
    ...baseTypography,
    ...baseTheme.typography,
  },
  overrides: {
    MuiButton: MuiButton(baseTheme),
    MuiContainer: MuiContainer(baseTheme),
    MuiCssBaseline: MuiCssBaseline(baseTheme),
    MuiDivider: MuiDivider(baseTheme),
    MuiFormGroup: MuiFormGroup(baseTheme),
    MuiInput: MuiInput(baseTheme),
    MuiInputBase,
    MuiLink,
    MuiList,
    MuiListItem: MuiListItem(baseTheme),
    MuiOutlinedInput: MuiOutlinedInput(baseTheme),
    MuiSelect,
    MuiTable: MuiTable(baseTheme),
    MuiTableCell,
    MuiTableHead,
    MuiToolbar: MuiToolbar(baseTheme),
    MuiTypography: MuiTypography(baseTheme),
  },
})

export default getThemeOptions
