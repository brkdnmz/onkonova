import { useBlogQuery } from "@/hooks/use-blog-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs/_blog-layout/$blogId/")({
  component: BlogComponent,
});

function BlogComponent() {
  const { blogId } = Route.useParams();
  const blogQuery = useBlogQuery({ blogId });

  const blog = blogQuery.data;

  return (
    <article className="prose max-w-full mx-auto">
      {blogQuery.isPending ? (
        <p>Yükleniyor...</p>
      ) : blogQuery.isError ? (
        <p>Hata oluştu</p>
      ) : blog ? (
        <>
          <h1>{blog.title || "(Başlıksız)"}</h1>

          <img
            src={blog.coverImageUrl}
            alt={blog.title}
            className="mx-auto"
          />

          <p className="whitespace-pre">{blog.content}</p>
        </>
      ) : (
        <p>Blog bulunamadı</p>
      )}
    </article>
  );
}
