import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">NextLaunch</h1>
      <p className="text-lg">
        Your complete Next.js starter kit. Get started with confidence.
      </p>
      <Button>Get Started</Button>
    </div>
  );
}
