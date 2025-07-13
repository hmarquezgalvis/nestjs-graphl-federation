import { User } from './user.entity';

export class Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  user?: User;
}
