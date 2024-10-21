import { auth } from "@clerk/nextjs";

const adminIds = ["user_2lL9XWBa8l7ZB0Cj15NGF2Us6lu", "user_2nk14kE9uL8ZBtr9dIOPXFy8ERx","user_2lgDGQkEdpQqTKqeab0GIROTszJ","user_2nk3588RaIroi1m8zpIX9x7lOv0"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
