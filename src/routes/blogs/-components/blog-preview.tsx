import { Blog } from "@/models";
import { Link } from "@tanstack/react-router";

type BlogPreviewProps = {
  blog: Blog;
};

export function BlogPreview({ blog }: BlogPreviewProps) {
  return (
    <Link
      to={`/blogs/$blogId`}
      params={{ blogId: blog.id }}
    >
      <div className="p-2 border-2 border-fuchsia-500 rounded-md">
        <h2 className="text-4xl">{blog.title || "(Başlıksız)"}</h2>

        <img
          src={blog.coverImageUrl}
          alt={blog.title}
          className="mx-auto"
        />

        <p className="text-xl">{blog.content}</p>
      </div>
    </Link>
  );
}
