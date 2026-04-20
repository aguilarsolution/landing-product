import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const FreeTrialPage = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="!text-4xl font-bold">Coming Soon</h1>
      <p>Tnks for watching</p>
      <Link
        href={"/"}
        className={buttonVariants({ variant: "link", size: "lg" })}
      >
        Back to home
      </Link>
    </section>
  );
};
export default FreeTrialPage;
