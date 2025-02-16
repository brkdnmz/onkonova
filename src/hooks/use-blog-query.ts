import { getBlogById } from "@/api/blog";
import { Blog } from "@/models";
import { useQuery } from "@tanstack/react-query";

type UseBlogQueryProps = {
  blogId: Blog["id"];
};

export function useBlogQuery(props: UseBlogQueryProps) {
  const blogQuery = useQuery({
    queryKey: ["blogs", props.blogId],
    queryFn: async () => {
      const blog = await getBlogById(props.blogId);
      return blog;
    },
  });

  return blogQuery;
}
