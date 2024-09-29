import { FC, ReactNode } from "react";
import { ArrowRightIcon } from "@/assets/arrow-right-icon";
import { ConnectsIcon } from "@/assets/connects-icon";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { NoteIcon } from "@/assets/note-icon";
import { Button } from "@/components/ui/button";

interface MainContainerProps {
  children: ReactNode;
}

const activities = [
  {
    key: "connects",
    label: "connects",
    detailsLink: "/connects",
    icon: <ConnectsIcon />,
    items: [
      { label: "sent", quantity: 0, key: "connects sent" },
      { label: "received", quantity: 0, key: "connects received" },
      { label: "completed", quantity: 0, key: "connects completed" },
    ],
  },
  {
    key: "offers",
    label: "offers",
    detailsLink: "account/portfolio",
    icon: <NoteIcon />,
    items: [
      { label: "published", quantity: 0, key: "offers sent" },
      { label: "drafts", quantity: 0, key: "offers received" },
    ],
  },
];

export const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col p-6 bg-white min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Good evening, Jason!</h1>
        <p className="text-sm text-gray-500">Sunday, September 29</p>
      </div>
      <div className="grid grid-cols-1 gap-2 text-foreground-main sm:mx-0 sm:grid-cols-3 sm:gap-4">
        <div className="flex justify-between rounded-2xl bg-gray-100 0 p-6">
          <span>0 connect requests</span>
          <ArrowRightIcon />
        </div>
        <div className="flex justify-between rounded-2xl bg-gray-100 p-6">
          <span>0 connect responses</span>
          <ArrowRightIcon />
        </div>
        <div className="flex justify-between rounded-2xl bg-gray-100 p-6">
          <span>0 new messages</span>
          <ArrowRightIcon />
        </div>
      </div>

      <div className="flex flex-col rounded-2xl bg-gray-100 p-4 mt-4">
        <Label className="mb-3 pl-2 text-md font-medium text-foreground-800">
          Your activity
        </Label>
        <div className="flex w-full gap-2 sm:gap-4">
          {activities?.map((item) => (
            <div
              className="flex h-[200px] min-w-[290px] basis-2/5  flex-col rounded-xl bg-white px-6 py-4"
              key={item.key}
            >
              <div className="flex justify-between">
                <span className="flex gap-2">
                  {item.icon}
                  <Label className="text-base font-medium text-foreground-main">
                    Connects
                  </Label>
                </span>
                <Link href={"/"}>
                  <ArrowRightIcon />
                </Link>
              </div>

              <hr className="mt-4 h-[1px] text-secondary-800" />
              <div className="mt-4 flex flex-col gap-2">
                {item.items.map((item) => (
                  <div className="flex justify-between" key={item.key}>
                    <span className="mr-2 flex items-center py-1">
                      {item.label}
                    </span>
                    <span className="flex w-4 items-center justify-center text-2xl font-semibold">
                      {item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="flex min-w-[145px] flex-grow items-center justify-center gap-2 rounded-xl bg-white">
            <span className="align-middle text-base font-normal">
              days active
            </span>
            <span className="align-middle text-2xl font-semibold">1</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-2xl bg-gray-100 my-4 sm:mx-0 p-2">
        <div className="mb-3 flex w-full items-center justify-between">
          <Label className="pl-2 text-sm font-medium text-foreground-800">
            MATCHING YOUR INTERESTS
          </Label>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl bg-white ">
          <div className="mb-4 mt-10 flex w-[330px] flex-col items-center justify-center gap-2 px-4">
            <span className="w-[165px] text-base font-medium text-foreground-main">
              Set up your interests
            </span>
            <p className="text-center text-sm font-normal text-foreground-800">
              Start exploring personalized recommendations
            </p>
          </div>
          <Button className="radius-[6px] mb-10 flex w-[212px] gap-2 bg-secondary-800 py-2 pl-2 pr-4 text-foreground-main">
            <span className="h-5 w-5">+</span>
            <span className="align-middle text-base font-semibold">
              Add interests
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
