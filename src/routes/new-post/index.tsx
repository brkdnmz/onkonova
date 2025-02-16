import { useCreateBlogMutation } from "@/hooks/use-create-blog-mutation";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ContentInput } from "./-components/content-input";
import { CoverImageInput } from "./-components/cover-image-input";
import { ShareButton } from "./-components/share-button";
import { TitleInput } from "./-components/title-input";

export const Route = createFileRoute("/new-post/")({
  component: NewPostComponent,
});

function NewPostComponent() {
  const createBlogMutation = useCreateBlogMutation();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createBlogMutation.mutate(
          {
            title: e.target[0].value,
            content: e.target[2].value,
            coverImage: e.target[1].files[0],
          },
          {
            onSuccess: () => {
              console.log("success");
              navigate({ to: "/" });
            },
            onSettled: () => {
              console.log("settled");
            },
            onError: () => {
              console.log("error");
            },
          }
        );
      }}
      className="grid gap-2"
    >
      <TitleInput />

      <CoverImageInput />

      <ContentInput />

      <ShareButton isLoading={createBlogMutation.isPending} />
    </form>
  );
}
