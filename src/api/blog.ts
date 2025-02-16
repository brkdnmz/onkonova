import { db, storage } from "@/firebase";
import { Blog } from "@/models";
import { queryClient } from "@/react-query";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { CreateBlogPayload } from "./types";

const blogCollection = collection(db, "blogs");

async function uploadCoverImage(coverImage: CreateBlogPayload["coverImage"]) {
  if (!coverImage) return;

  const storageRef = ref(storage, `blog-covers/${coverImage.name}`);
  await uploadBytes(storageRef, coverImage);
  return getDownloadURL(storageRef);
}

export async function createBlog(blog: CreateBlogPayload) {
  const imageUrl = await uploadCoverImage(blog.coverImage);

  const res = await addDoc(blogCollection, {
    title: blog.title,
    content: blog.content,
    coverImageUrl: imageUrl,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  queryClient.invalidateQueries({ queryKey: ["blogs"] });
}

export async function getBlogs(): Promise<Blog[]> {
  const q = query(blogCollection);
  const blogs = await getDocs(q);
  return blogs.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Blog);
}

export async function getBlogById(id: Blog["id"]): Promise<Blog | null> {
  const blog = await getDoc(doc(blogCollection, id));
  return blog.exists() ? ({ id: blog.id, ...blog.data() } as Blog) : null;
}
