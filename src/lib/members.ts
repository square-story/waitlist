import { db } from "@/lib/schema";
import { users } from "@/lib/schema";

export async function getAllMembers() {
  const allUsers = await db.select().from(users);
  return allUsers;
}
