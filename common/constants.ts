import React from "react";
import { MdEdit, MdReport } from "react-icons/md";

export const ROUTE_NAMES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",

  BLOG: "/blog",
  BLOG_DETAILS: "/blog",
  CREATE_BLOG: "/blog/create-blog",

  POST_DETAILS: "/post",

  USER_LOGOUT: "/user/logout",
  USER_ADD_PERSONAL_DETAILS: "/user/add-personal-details",
  USER_ADD_SKILLS_AND_EXPERIENCE: "/user/add-skills-and-experience",
  USER_CONFIRM_EMAIL: "/user/confirm-email",
  USER_CHANGE_PASSWORD: "/user/change-password",
  USER_VIEW_PROFILE: "/user/view-profile",
  USER_UPDATE_PROFILE: "/user/update-profile",

  COMPANY_HOME: "/company",
  COMPANY_ADD_DETAILS: "/company/add-details",
  COMPANY_LOGOUT: "/company/logout",
  COMPANY_VIEW_PROFILE: "/company/view-profile",

  CONTACT_US: "/contact/contact-us",
  FAQ: "/contact/faq",
  ADVERTISE: "/contact/advertise"
};

export const MORE_OPTIONS_ACTIONS = [
  { name: "Report", value: "Report", icon: React.createElement(MdReport) }
];
export const MORE_OPTIONS_ACTIONS_OWNER = [
  { name: "Edit", value: "Edit", icon: React.createElement(MdEdit) },
  // { name: "Delete", value: "Delete" },
  { name: "Report", value: "Report", icon: React.createElement(MdReport) }
];

export interface OptionType {
  name: string;
  value: string;
  icon?: any;
}

export interface ChipsOptionType {
  id: string;
  name: string;
}

export const ALL_CATEGORY = { name: "All", value: "All" };
export const NEW = "new";
export const QUERY = "[query]";
export const ME = "me";

export const MAX_IMAGE_SIZE = {
  WIDTH: 640,
  HEIGHT: 440
};

export const BLOG_VIEW_LIMIT = 1;

export const IMAGE_SERVER_URL =
  "https://storage.googleapis.com/switchtitle-blog-images/";
