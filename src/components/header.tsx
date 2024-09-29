import { FC } from "react";
import Link from "next/link";

export const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 flex h-[64px] w-full bg-white px-3 lg:flex-row lg:justify-between xl:px-6">
      <div className="my-[16px] flex items-center gap-x-9 lg:w-full">
        <img
          src="/assets/Serdeczna-Fundacja-Hearty-logo-svg-1.svg"
          alt="Logo"
          className="h-8"
        />
        <h1 className="text-xl font-semibold">Serdeczna Fundacja Hearty</h1>
      </div>
      <div className="flex w-full items-center justify-end gap-3 text-foreground-main ">
        <Link
          href="/invite"
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Invite
        </Link>
      </div>
    </header>
  );
};
