import { Timestamp } from "firebase/firestore";

export type Blog = {
  title: string;
  coverImageUrl?: string;
  content: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  id: string;
};
