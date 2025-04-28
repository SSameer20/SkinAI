// Extend the Session and JWT types to include the `id` field
declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Add the `id` property
      email?: string | null;
      name?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: string; // Add the `id` property
  }

  // Define the JWT type
  interface JWT {
    id?: string;
    email?: string;
  }
}
