import React from "react"
import Box from "@material-ui/core/Box"
import Divider from "@material-ui/core/Divider"
import QuestionText from "../QuestionText"
import AnswerWithText from "../AnswerWithText"

const Question = ({
  children,
  question,
  AnswerProps,
  QuestionProps,
  ...props
}) => (
  <Box
    itemScope
    itemProp="mainEntity"
    itemType="https://schema.org/Question"
    {...props}
  >
    <QuestionText {...QuestionProps}>{question}</QuestionText>
    <AnswerWithText {...AnswerProps}>{children}</AnswerWithText>
    <Divider />
  </Box>
)

export default Question
