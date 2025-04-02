
export interface Friend {
  id: string;
  name: string;
  avatar: string;
  points: number;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
  graduationYear: number;
  university: string;
  points: number;
  friends: Friend[];
  attendedEvents: string[];
  sharedEvents: string[];
}
