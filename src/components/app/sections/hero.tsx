import Image from "next/image";
import Logo from "@/components/app/icons/logo";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen  md:-my-12 px-6 xl:px-0">
      <div className="flex  flex-col  md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2">
          <Badge className="-mb-6 inline-flex justify-end" variant={"outline"}>
            ✦ Now in public beta
          </Badge>
          <h1 className="!text-5xl md:!text-6xl font-sans font-semibold py-6 text-center md:text-left">
            To get every access point. Under your control. Put in behind{" "}
            <span className="!text-4xl md:!text-6xl inline-flex flex md:block items-center gap-3 md:inline py-3 md:py-0">
              <b className="normal-case font-normal">The Door </b>
              <Logo extraClass="inline-flex stroke-2" size={50}></Logo>
            </span>
          </h1>
          <h2 className="!text-xl text-black/70 text-center md:text-left">
            The Door centralizes access management for you and your development
            teams. Grant, revoke, and audit permisisons across your entire
            infrastructure - without any complexity{" "}
          </h2>
          <div className="py-3 px-6 md:px-0 flex  items-center justify-center md:justify-start gap-x-3">
            <Link
              href={"/free-trial"}
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Get started free
            </Link>
            <Link
              href={"/docs"}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              View docs
            </Link>
          </div>
        </div>
        <div className="w-full md:w-200  md:p-0 h-full overflow-hidden flex justify-center items-center flex-1">
          <Image
            src={"/dashboard-example.webp"}
            width={500}
            height={500}
            loading="eager"
            alt="Dashboard preview image"
            title="Example image from our dashboard"
            className="w-full h-full"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
