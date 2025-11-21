import Link from "next/link";

import Button from "../shared/Button";
import ImageKit from "../ui/ImageKit";

const menuList = [
  {
    id: 1,
    href: "/",
    name: "Home",
    icon: "home.svg",
  },
  {
    id: 2,
    href: "/",
    name: "Explore",
    icon: "explore.svg",
  },
  {
    id: 3,
    href: "/",
    name: "Notification",
    icon: "notification.svg",
  },
  {
    id: 4,
    href: "/",
    name: "Messages",
    icon: "message.svg",
  },
  {
    id: 5,
    href: "/",
    name: "Bookmarks",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    href: "/",
    name: "Jobs",
    icon: "job.svg",
  },
  {
    id: 7,
    href: "/",
    name: "Communities",
    icon: "community.svg",
  },
  {
    id: 8,
    href: "/",
    name: "Premium",
    icon: "logo.svg",
  },
  {
    id: 9,
    href: "/",
    name: "Profile",
    icon: "profile.svg",
  },
  {
    id: 10,
    href: "/",
    name: "More",
    icon: "more.svg",
  },
];
const LeftBar = () => {
  return (
    <aside className=" h-screen sticky top-0 flex flex-col justify-between gap-3 pt-2 pb-8">
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start ">
        <Link href="/" className="p-2 hover_btn">
          <ImageKit src="icon/logo.svg" alt="logo" width={24} height={24} />
        </Link>
        <nav className="flex flex-col gap-2">
          {menuList.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className="rounded-full text-base p-2  flex items-center gap-4 hover_btn"
            >
              <ImageKit
                src={`icon/${item.icon}`}
                alt={item.name}
                width={20}
                height={20}
              />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </nav>
        {/* buttons */}
        <Button className="flex! xxl:hidden! w-12! h-11" src="icon/post.svg" />
        <Button
          text="post"
          className="hidden! xxl:flex! px-20! font-semibold"
        />
      </div>
      {/* user details */}
      <footer className="hover_btn py-1 px-2 flex items-center justify-between gap-1">
        <div className="flex items-center gap-2">
          <figure className="w-8 h-8 relative rounded-full overflow-hidden">
            <ImageKit
              src="/general/post.jpeg"
              alt="avatar"
              width={100}
              height={100}
              tr={true}
            />
          </figure>
          <div className="hidden xxl:flex flex-col ">
            <span className="truncate font-bold text-sm">Mariam</span>
            <span className="truncate text-xs">@mariam@gmail.com</span>
          </div>
        </div>
        <span className="hidden xxl:block cursor-pointer font-bold">...</span>
      </footer>
    </aside>
  );
};

export default LeftBar;
