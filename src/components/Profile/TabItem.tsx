import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  TabItem: {
    "& img": { maxHeight: "20px" },
    color: "black",
  },
  active: {
    color: "#5a39a2",
    backgroundColor: "#eeeaf5",
    borderRadius: "24px",
  },
}));

function TabItem({
  label,
  icon,
  isActive,
  onClick,
}: {
  label: string;
  icon: string;
  isActive?: boolean;
  onClick: () => void;
}) {
  const classes = useStyles();
  return (
    <button
      onClick={onClick}
      className={clsx("flex gap-2 items-center px-3 py-0.75", classes.TabItem, {
        [classes.active]: isActive,
      })}
    >
      <img width="24" height="24" src={icon} alt="icon" />
      <p>{label}</p>
    </button>
  );
}

export default TabItem;
