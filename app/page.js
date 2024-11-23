import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronRightIcon } from "lucide-react";
export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="mx-auto container py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
          Streamline your workflow <br />
          <span>
            with{" "}
            <Image
              src={"/logo2.png"}
              alt="logo image"
              width={400}
              height={80}
              className="h-14 sm:h-24 w-auto object-contain"
            />
          </span>
        </h1>
        <p>Enpower your team with our end to end bussiness tracking solution</p>
        <Link href={"/onboarding"}>
          <Button size={"lg"} className="mr-4">
            Get Started <ChevronRight size={18} className="ml-1" />
          </Button>
        </Link>
        <Link href={"#features"}>
          <Button size={"lg"} variant="outline" className="mr-4">
            Learn more 
          </Button>
        </Link>
      </section>
    </div>
  );
}
