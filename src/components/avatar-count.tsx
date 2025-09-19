"use client";

import { useEffect, useState } from "react";

import {
  AvatarGroup,
  AvatarGroupTooltip,
} from "@/components/animate-ui/components/animate/avatar-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// User type definition based on our schema
type User = {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  isActive: boolean;
};

const AvatarCount = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/members");
        if (!response.ok) {
          throw new Error("Failed to fetch members");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching members:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Generate initials from name
  const getInitials = (name: string | null): string => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="mx-auto flex w-fit flex-col items-center gap-2 sm:flex-row md:gap-4">
      <span className="inline-flex items-center -space-x-4">
        <AvatarGroup>
          {isLoading
            ? // Show loading placeholders
              Array(3)
                .fill(0)
                .map((_, index) => (
                  <Avatar
                    key={`loading-${index}`}
                    className="border-background size-7 border-2 md:size-12"
                  >
                    <AvatarFallback>...</AvatarFallback>
                  </Avatar>
                ))
            : users.map((user) => (
                <Avatar
                  key={user.id}
                  className="border-background size-7 border-2 md:size-12"
                >
                  <AvatarImage src={user.image || undefined} />
                  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                  <AvatarGroupTooltip>
                    {user.name || "Anonymous User"}
                  </AvatarGroupTooltip>
                </Avatar>
              ))}
        </AvatarGroup>
      </span>
      <div className="text-muted-foreground text-sm">
        Joined {users.length > 0 ? `${users.length}+` : "0"} others.
      </div>
    </div>
  );
};

export default AvatarCount;
