import { Card } from "@/components/ui/card";
import { PAGES } from "../data.const";

export default async function RoutePage() {
  return (
    <Card className="p-6 px-8 flex">
      <ul className="list-disc flex flex-col">
        {PAGES.map((page, id) => (
          <li key={id} className="ml-4">
            <a href={`code/${page.slug}`} className="hover:underline">
              {page.slug}
            </a>
          </li>
        ))}
      </ul>
    </Card>
  )
}
