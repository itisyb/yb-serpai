import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  menuItem: {
    "& img": { maxHeight: "20px" },
  },
}));

function MenuItem({ label, icon }: { label: string; icon: string }) {
  const classes = useStyles();
  return (
    <div className={clsx("flex gap-2 items-center", classes.menuItem)}>
      <img width="24" height="24" src={icon} alt="icon" />
      <p>{label}</p>
    </div>
  );
}

export default MenuItem;
