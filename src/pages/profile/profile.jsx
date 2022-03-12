import React from "react";
import { withAuth } from "../../authContext";

export const Profile = () => {
  return <>
  Профиль
  </>
}

export const ProfileWithAuth = withAuth(Profile)