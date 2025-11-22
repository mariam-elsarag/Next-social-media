import Link from "next/link";
import Feed from "./_component/feature/Feed";
import Share from "./_component/feature/Share";

export default function Home() {
  return (
    <div>
      <header className="px-4 pt-4 flex justify-between items-center text-textGrey font-semibold border-b border-borderGrey">
        <Link
          href="/"
          className={` flex-1 text-center flex items-center justify-center `}
        >
          <span
            className={`flex items-center pb-3 border-b-4 border-iconBlue w-fit `}
          >
            For you
          </span>
        </Link>
        <Link
          href="/"
          className="flex-1 text-center flex items-center justify-center"
        >
          <span className={`flex items-center w-fit `}> Following</span>
        </Link>
      </header>
      <Share />
      <Feed />
    </div>
  );
}
