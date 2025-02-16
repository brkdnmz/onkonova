import { Blog } from "@/models";
import { BlogPreview } from "./blog-preview";

type BlogListProps = {
  blogs: Blog[];
};

export function BlogList({ blogs }: BlogListProps) {
  const sortedBlogs = [...blogs].sort((a, b) => {
    return a.createdAt > b.createdAt ? -1 : 1;
  });

  return (
    <ul>
      {sortedBlogs.map((blog) => (
        <li
          key={blog.id}
          className="pb-2"
        >
          <BlogPreview blog={blog} />
        </li>
      ))}
    </ul>
  );
}
