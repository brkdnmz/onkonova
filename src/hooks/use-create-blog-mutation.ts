import { createBlog } from "@/api/blog";
import { CreateBlogPayload } from "@/api/types";
import { queryClient } from "@/react-query";
import { useMutation } from "@tanstack/react-query";

export function useCreateBlogMutation() {
  const createBlogMutation = useMutation({
    mutationKey: ["createBlog"],
    mutationFn: async (blog: CreateBlogPayload) => {
      const response = await createBlog(blog);
      return response;
    },
    onMutate: async (blog) => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
    onError: (error, variables, context) => {
      console.error(error);
    },
  });

  return createBlogMutation;
}
