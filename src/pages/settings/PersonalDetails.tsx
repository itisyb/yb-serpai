import clsx from "clsx";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  dataContainer: {
    width: "400px",
    "& input": {
      height: "20px",
    },
    color: "black",
  },
  button: {
    width: "100px",
    height: "40px",
  },
  heading: { color: "#ff492c", fontWeight: 600, fontSize: "21px" },
}));

type FormData = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  picture?: HTMLImageElement;
  bio: string;
  website?: string;
  twitter?: string;
  github?: string;
  facebook?: string;
  linkedin?: string;
  youtube?: string;
};

function PersonalDetails() {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert("Data submitted");
  });

  return (
    <div
      className={clsx(
        classes.dataContainer,
        "grid-x grid-margin-x grid-margin-y"
      )}
    >
      <h4 className={clsx("mb-1", classes.heading)}>Profile Details</h4>
      <form onSubmit={onSubmit}>
        <div className="flex gap-0.25 flex-col mb-1">
          <Label htmlFor="firstName" value="First Name" />
          <TextInput
            id="firstName"
            type="text"
            {...register("firstName")}
            className="mb-0.75rem"
            width={"auto"}
            required
            placeholder="Enter your first name"
          />
        </div>
        <div className="flex gap-0.25 flex-col mb-1">
          <Label htmlFor="lastName" value="Last Name" />
          <TextInput
            id="lastName"
            {...register("lastName")}
            type="text"
            className="mb-0.75rem"
            width={"auto"}
            placeholder="Enter your last name"
          />
        </div>
        <div className="flex gap-0.25 flex-col mb-1">
          <Label htmlFor="userName" value="Username" />
          <TextInput
            id="userName"
            {...register("userName")}
            type="text"
            className="mb-0.75rem"
            width={"auto"}
            placeholder="Enter your username"
          />
        </div>
        <div className="flex gap-0.25 flex-col mb-1">
          <Label htmlFor="name" value="Email" />
          <TextInput
            id="email"
            {...register("email")}
            type="email"
            className="mb-0.75rem"
            width={"auto"}
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex gap-0.25 flex-col mb-1">
          <Label htmlFor="bio" value="Bio" />
          <Textarea
            name="bio"
            placeholder="Your cool bio goes here"
            {...register("bio")}
          />
        </div>
        <div className="flex gap-0.25 flex-col mb-1">
          <Label htmlFor="website" value="Website" />
          <TextInput
            id="website"
            {...register("website")}
            type="text"
            className="mb-0.75rem"
            placeholder="www.yourwebsite.com"
          />
        </div>
        <div className="flex gap-0.25 flex-col mb-1">
          <Label htmlFor="twitter" value="Twitter" />
          <TextInput
            id="twitter"
            {...register("twitter")}
            type="text"
            className="mb-0.75rem"
            placeholder="@"
          />
        </div>
        <div className="flex gap-0.25 flex-col mb-1">
          <Label htmlFor="instagram" value="Instagram" />
          <TextInput
            id="instagram"
            {...register("instagram")}
            type="text"
            className="mb-0.75rem"
            placeholder="@"
          />
        </div>
        <div className="flex gap-0.25 flex-col mb-1">
          <Label htmlFor="github" value="Github" />
          <TextInput
            id="github"
            {...register("github")}
            type="text"
            className="mb-0.75rem"
            placeholder="@"
          />
        </div>
        <div className="flex gap-0.25 flex-col mb-1">
          <Label htmlFor="facebook" value="Facebook URL" />
          <TextInput
            id="facebook"
            {...register("facebook")}
            type="text"
            className="mb-0.75rem"
            placeholder="@"
          />
        </div>
        <div className="flex gap-0.25 flex-col mb-1">
          <Label htmlFor="linkedin" value="Linkedin URL" />
          <TextInput
            id="linkedin"
            {...register("linkedin")}
            type="text"
            className="mb-0.75rem"
            placeholder="@"
          />
        </div>
        <div className="flex gap-0.25 flex-col mb-1">
          <Label htmlFor="youtube" value="Youtube URL" />
          <TextInput
            id="youtube"
            {...register("youtube")}
            type="text"
            className="mb-0.75rem"
            placeholder="@"
          />
        </div>
        <Button
          className={clsx(classes.button, "mt-4")}
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Save
        </Button>
      </form>
    </div>
  );
}

export default PersonalDetails;
