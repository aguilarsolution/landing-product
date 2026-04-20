import Link from "next/link";
import Logo from "../icons/logo";

interface SiteMapSection {
  title: string;
  links: { name: string; link: string }[];
}
const siteMap: SiteMapSection[] = [
  {
    title: "Product",
    links: [
      { name: "Features", link: "/#features" },
      { name: "Pricing", link: "/#pricing" },
      { name: "Changelog", link: "/docs" },
      { name: "Roadmap", link: "/docs" },
    ],
  },
  {
    title: "Developers",
    links: [
      { name: "Documentation", link: "/docs" },
      { name: "Api Reference", link: "/docs" },
      { name: "Status", link: "/docs" },
      { name: "Github", link: "/docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", link: "/" },
      { name: "Blog", link: "/docs" },
      { name: "Careers", link: "/docs" },
      { name: "Contact", link: "/docs" },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="max-w-300 mx-auto mt-24 py-12 px-6 md:px-0">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-0 gap-0 md:gap-6 jusfity-around py-3 md:py-6">
        <div className="flex gap-3 items-center jusfity-center">
          <Logo extraClass="w-50 h-50"></Logo>
          <p>
            <b>The Door</b> — Access control infrastructure for modern
            engineering teams.
          </p>
        </div>

        {siteMap.map(({ title, links }, index) => {
          return (
            <div
              key={index + title}
              className="flex flex-col gap-1 md:gap-3 items-center justify-center"
            >
              <div>
                <h4 className="font-bold py-1 md:py-3">{title}</h4>
                <ul>
                  {links.map(({ name, link }, index) => {
                    return (
                      <li key={index + name} className="">
                        <Link
                          href={link}
                          className="text-foreground/60 hover:text-foreground hover:underline"
                        >
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <span className="flex items-center justify-center w-full text-center text-foreground/70">
          © {`${new Date().getFullYear()}`} The Door Technologies, Inc. All
          rights reserved.
        </span>
        <div className="flex justify-center items-center gap-6">
          <Link
            href={"/legal#privacy"}
            className="text-foreground/70 hover:text-foreground duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href={"/legal#terms"}
            className="text-foreground/70 hover:text-foreground duration-200"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
