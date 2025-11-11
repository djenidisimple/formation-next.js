import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PAGES } from "../../data.const";

export default async function Page({
  params
}: {
  params: Promise<{
    slug: string
  }>
}) {
  
  const resolvedParams = await params;
  
  
  return (
    <Card className="flex flex-col">
        <span className="block">
            {resolvedParams.slug}
        </span>
        <span className="block">
            {PAGES.find(page => page.slug === resolvedParams.slug)?.description}
        </span>
      <a 
        href={PAGES.find(page => page.slug === resolvedParams.slug)?.url}
        className={buttonVariants({ variant: "outline" })}
      >Visit</a>
    </Card>
  );
}