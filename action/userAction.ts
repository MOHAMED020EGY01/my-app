"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { id } from "zod/v4/locales";

const prisma = new PrismaClient();

export const getUserListAction = async (userId: string | null) => {
  const users = await prisma.user.findMany(
    {
      where: {
        userId: userId as string,
      },
      orderBy: { createdAt: "desc" }
    }
  );
  return users;
};
export const getUserAction = async () => {};

export const createUserAction = async ({
  name,
  email,
  profile,
  userId,
}: {
  name: string;
  email: string;
  profile: string;
  userId?: string | null;
}) => {
  await prisma.user.create({
    data: {
      name: name,
      email: email,
      profile: profile,
      userId: userId as string,
    },
  });
  revalidatePath("/");
};

export const updateUserAction = async ({ id, name, email, profile }: { id: string; name: string; email: string; profile: string }) => {
  await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      email: email,
      profile: profile,
    },
  });
  revalidatePath("/");
};


export const deleteUserAction = async ({ id }: { id: string }) => {
  await prisma.user.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
};
