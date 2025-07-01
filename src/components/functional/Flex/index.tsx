import styles from "./Flex.module.css";
import React from "react";

// Extended justify content options
type ExtendType = "between" | "around" | "evenly";

// Horizontal and vertical alignment options
type BasicHorizontal = "left" | "center" | "right";
type BasicVertical = "top" | "center" | "bottom";

// Shared props
interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  style?: React.CSSProperties;
  gap?: number | string;
  className?: string;
}

// Discriminated union for direction === "row" (default)
interface RowDirectionProps extends BaseProps {
  direction?: "row";
  horizontal?: BasicHorizontal | ExtendType; // Extended only for row
  vertical?: BasicVertical; // Basic only for row
}

// Discriminated union for direction === "column"
interface ColumnDirectionProps extends BaseProps {
  direction: "column";
  horizontal?: BasicHorizontal; // Basic only for column
  vertical?: BasicVertical | ExtendType; // Extended only for column
}

// Combined prop type
type FlexProps = RowDirectionProps | ColumnDirectionProps;

// CSS mapping
const values: Record<string, Record<string, string>> = {
  justify: {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
    top: "justify-start",
    bottom: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  },
  align: {
    top: "items-start",
    center: "items-center",
    bottom: "items-end",
    left: "items-start",
    right: "items-end",
  },
};

const Flex = ({
  children,
  style = {},
  className = "",
  direction = "row",
  horizontal = "left",
  vertical = "top",
  gap = 0,
  ...props
}: FlexProps) => {
  // Determine alignment classes based on direction
  const justifyClass =
    direction === "row"
      ? styles[values.justify[horizontal]]
      : styles[values.justify[vertical]];

  const alignClass =
    direction === "row"
      ? styles[values.align[vertical]]
      : styles[values.align[horizontal]];

  const gapStyle = typeof gap === "number" ? `${gap}px` : gap;

  return (
    <div
      {...props}
      style={{ ...style, gap: gapStyle }}
      className={`${styles.flex} ${
        styles[direction]
      } ${justifyClass} ${alignClass} ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Flex;
