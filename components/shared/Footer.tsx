import Link from "next/link";
import { Icons } from "./Icons";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 text-center sm:flex-row">
        <Link href="/">
          <Icons.logo className="w-10 h-10" />
        </Link>

        <p>2024 Eventliee. All Rignt reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
