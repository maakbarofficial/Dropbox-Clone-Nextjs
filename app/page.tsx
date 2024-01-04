import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox. <br /> <br />
            Storing everything for you and your business needs. All in one
            place.
          </h1>

          <p className="pb-20">
            Join over 700 million registered users who trust Dropbox Easy to
            use, reliable, private and secure. It’s no wonder Dropbox is the
            choice for storing and sharing your most important files.
          </p>

          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-blue-500 p-5 w-fit"
          >
            Try it for free! <ArrowRight className="ml-10" />
          </Link>
        </div>
        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080-en_GB.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">Diclamier</p>
      <p className="text-center font-light text-xl p-2">
        This clone is made for informational and educational purposes only. We
        do not own or affiliate with Dropbox or/and any of its subsidiaries in
        any form. Copyright Disclaimer under section 107 of the Copyright Act
        1976, allowance is made for &quot;fair use&quot; of this video for
        educational purposes.
      </p>
    </main>
  );
}
