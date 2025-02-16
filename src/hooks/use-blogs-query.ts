import { getBlogs } from "@/api/blog";
import { useQuery } from "@tanstack/react-query";

export function useBlogsQuery() {
  const blogsQuery = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const blogs = await getBlogs();
      return blogs;
    },
  });

  return blogsQuery;
}
