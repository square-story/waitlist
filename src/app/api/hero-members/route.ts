import { eq, ne, sql } from "drizzle-orm";

import { auth } from "@/lib/auth";
import { db } from "@/lib/schema";
import { users } from "@/lib/schema";

export async function GET() {
  try {
    const session = await auth();
    const currentUserId = session?.user?.id;

    let members = [];

    if (currentUserId) {
      const currentUser = await db
        .select()
        .from(users)
        .where(eq(users.id, currentUserId))
        .limit(1);

      const randomUsers = await db
        .select()
        .from(users)
        .where(ne(users.id, currentUserId))
        .orderBy(sql`RANDOM()`)
        .limit(5);

      members = [...currentUser, ...randomUsers];
    } else {
      members = await db
        .select()
        .from(users)
        .orderBy(sql`RANDOM()`)
        .limit(6);
    }

    const totalCountResult = await db
      .select({ count: sql<number>`COUNT(*)` })
      .from(users);

    const totalCount = totalCountResult[0]?.count ?? 0;

    return Response.json({ members, totalCount });
  } catch (error) {
    console.error("Failed to fetch hero members:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
