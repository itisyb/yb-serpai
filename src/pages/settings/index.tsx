/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import TabItem from "components/Profile/TabItem";
import Image from "next/image";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import PersonalDetails from "./PersonalDetails";
import { ProfileTabs, ProfileTabsKeys } from "@/utils/constants";
import ActivityCenter from "./ActivityCenter";
import Reviews from "./Reviews";
import Products from "./Products";
import Rewards from "./Rewards";
import { Avatar } from "flowbite-react";

const useStyles = createUseStyles((theme) => ({
  fullWidth: {
    padding: 0,
    width: "100%",
  },
  profileImage: {
    borderRadius: "100%",
    overflow: "hidden",
  },
  name: {
    textTransform: "uppercase",
  },
  joiningDate: {
    color: "rgb(107 114 128)",
  },
}));

function Settings() {
  const classes = useStyles();
  const [tab, setTab] = useState(ProfileTabsKeys.ProfileDetails);

  function renderTabs() {
    switch (tab) {
      case ProfileTabsKeys.ProfileDetails:
        return <PersonalDetails />;
      case ProfileTabsKeys.ActivityCenter:
        return <ActivityCenter />;
      case ProfileTabsKeys.Reviews:
        return <Reviews />;
      case ProfileTabsKeys.Products:
        return <Products />;
      case ProfileTabsKeys.Rewards:
        return <Rewards />;
      default:
        return <PersonalDetails />;
    }
  }

  return (
    <div className="mx-1 md:mx-10 lg:mx-20 my-2">
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-12 md:col-span-3">
          <div className="rounded p-2 shadow-md bg-white mb-6">
            <div className="flex flex-col justify-center text-center items-center">
              <div className={classes.profileImage}>
                <Avatar
                  size={"md"}
                  rounded
                  img={
                    "https://ca.slack-edge.com/T04C58C9ZA6-U04C2A0RKA9-0b26199f8b98-512"
                  }
                />
              </div>
              <div>
                <p className={clsx(classes.name, "text-lg font-bold mt-1")}>
                  Devin
                </p>
                <p className={clsx(classes.joiningDate, "text-sm")}>
                  Member since April 07, 2023
                </p>
              </div>
            </div>
            <div className="border-t border-midnight-20 mt-2 mb-2" />

            <div className="flex flex-col">
              {ProfileTabs.map((item) => (
                <TabItem
                  onClick={() => setTab(item.key)}
                  isActive={tab === item.key}
                  key={item.key}
                  label={item.value}
                  icon="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-9 flex flex-col">
          <div className="rounded p-5 shadow-md bg-white mb-6 order-1 xl-order2">
            {renderTabs()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
