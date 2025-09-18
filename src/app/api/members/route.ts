import { desc } from "drizzle-orm";

import { db } from "@/lib/schema";
import { users } from "@/lib/schema";

export async function GET() {
  try {
    // Fetch users and order by emailVerified (join date) in descending order
    // This will show newest users first
    const members = await db
      .select()
      .from(users)
      .orderBy(desc(users.emailVerified))
      .limit(6);
    return Response.json(members);
  } catch (error) {
    console.error("Failed to fetch members:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
