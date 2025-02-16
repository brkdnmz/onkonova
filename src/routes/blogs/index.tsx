import { useBlogsQuery } from "@/hooks/use-blogs-query";
import { createFileRoute } from "@tanstack/react-router";
import { BlogList } from "./-components/blog-list";

export const Route = createFileRoute("/blogs/")({
  component: BlogsComponent,
});

function BlogsComponent() {
  const blogsQuery = useBlogsQuery();

  return (
    <div>
      {blogsQuery.isPending ? (
        <p>Yükleniyor...</p>
      ) : blogsQuery.isError ? (
        <p>Bir hata meydana geldi, lütfen sayfayı yenileyin.</p>
      ) : (
        <BlogList blogs={blogsQuery.data} />
      )}
    </div>
  );
}
