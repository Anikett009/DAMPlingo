import { auth } from "@clerk/nextjs";

const adminIds = ["user_2lL9XWBa8l7ZB0Cj15NGF2Us6lu"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
