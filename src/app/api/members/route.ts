import { db } from "@/lib/schema";
import { users } from "@/lib/schema";

export async function GET() {
  try {
    const members = await db.select().from(users);
    return Response.json(members);
  } catch (error) {
    console.error("Failed to fetch members:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
