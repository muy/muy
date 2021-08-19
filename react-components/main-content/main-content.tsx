import * as React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import { useStyles } from "./main-content.styles"

export type MainContentProps = {
  children?: React.ReactText,
  className?: string;
  id?: string;
};

export const MainContent = (props: MainContentProps) => {

  const {
    children,
    className,
    id = "content",
  } = props;

  const { root } = useStyles();

  return (
    <main
      className={classNames(root, className)}
      id={id}
      role={"main"}
      tabIndex={-1}>
      {children}
    </main>
  );
}

MainContent.defaultProps = {
  id: "content"
};

MainContent.displayName = "MainContent";

MainContent.propTypes = {
  id: PropTypes.string
}