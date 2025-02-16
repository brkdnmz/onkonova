import clsx from "clsx";

type ShareButtonProps = {
  isLoading?: boolean;
};

export function ShareButton(props: ShareButtonProps) {
  return (
    <button
      type="submit"
      className={clsx(
        "bg-fuchsia-500 text-white py-2 px-4 rounded cursor-pointer",
        props.isLoading && "opacity-50 pointer-events-none"
      )}
    >
      {!props.isLoading ? "Paylaş" : "Paylaşılıyor..."}
    </button>
  );
}
