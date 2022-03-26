import { UserRole } from "@core/consts";

export interface User {
  id?: string;
  name?: string;
  lastName?: string;
  email: string;
  password?: string;
  userRole?: UserRole;
}
