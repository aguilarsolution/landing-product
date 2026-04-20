import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="!text-6xl font-bold">Oh no!</h1>
      <p>this page is unavailable</p>
      <Link
        href={"/"}
        className={buttonVariants({ variant: "link", size: "lg" })}
      >
        Back to home
      </Link>
    </section>
  );
};
export default NotFoundPage;
