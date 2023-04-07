/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import MenuItem from "components/Profile/MenuItem";
import { Label, Select, TextInput } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  fullWidth: {
    padding: 0,
    width: "100%",
  },
  profileImage: {
    borderRadius: "100%",
    overflow: "hidden",
  },
  menuItem: {
    "& img": { maxHeight: "20px" },
  },
  dataContainer: {
    width: "400px",
    "& input": {
      height: "20px",
    },
  },
}));

function Settings() {
  const classes = useStyles();
  return (
    <div className="mx-20 my-2">
      Settings
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-12 sm:col-span-3">
          <div className="rounded p-5 shadow-md bg-white mb-6">
            <div className="flex flex-col justify-center text-center items-center">
              <div className={classes.profileImage}>
                <img
                  alt="profile"
                  src="https://ca.slack-edge.com/T04C58C9ZA6-U04C2A0RKA9-0b26199f8b98-512"
                />
              </div>
              <div>
                <p className="text-lg font-bold mt-1">Devin</p>
                <p className="text-xs">Member since April 07, 2023</p>
              </div>
            </div>
            <div className="border-t border-midnight-20 mt-2 mb-2" />

            <div className="flex flex-col gap-1">
              <MenuItem
                label="Activity Center"
                icon="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png"
              />
              <MenuItem
                label="Profile Details"
                icon="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png"
              />
              <MenuItem
                label="Reviews"
                icon="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png"
              />
              <MenuItem
                label="Products"
                icon="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-9 flex flex-col">
          <div className="rounded p-5 shadow-md bg-white mb-6 order-1 xl-order2">
            <div
              className={clsx(
                classes.dataContainer,
                "grid-x grid-margin-x grid-margin-y"
              )}
            >
              <h4 className=" text-lg">Profile Details</h4>
              <p className="my-1">Personal</p>
              <div className="flex gap-0.25 flex-col mb-1">
                <Label htmlFor="fname" value="First Name" />
                <TextInput
                  id="fname"
                  type="text"
                  className="mb-0.75rem"
                  width={"auto"}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="flex gap-0.25 flex-col mb-1">
                <Label htmlFor="lname" value="Last Name" />
                <TextInput
                  id="lname"
                  type="text"
                  className="mb-0.75rem"
                  width={"auto"}
                  placeholder="Enter your last name"
                />
              </div>
              <div className="flex gap-0.25 flex-col mb-1">
                <Label htmlFor="pronouns" value="Pronouns" />
                <TextInput id="pronouns" type="text" className="mb-0.75rem" />
              </div>
              <div className="flex gap-0.25 flex-col mb-1">
                <Label htmlFor="headline" value="Headline" />
                <TextInput id="headline" type="text" className="mb-0.75rem" />
              </div>
              <div className="flex gap-0.25 flex-col mb-1">
                <Label htmlFor="summary" value="Summary" />
                <TextInput id="summary" type="text" className="mb-0.75rem" />
              </div>
              <div className="flex gap-0.25 flex-col mb-1">
                <Label htmlFor="region" value="Region" />
                <Select>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
