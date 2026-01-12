export interface User {
  id: string;
  name: string;
  email: string;
  profile: string;
  createdAt: Date;
}

export interface DisplayDataProps {
  data: User[];
}
