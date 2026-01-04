import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
export default function NotFound() {
  return (
    <div>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon" >
            <ShieldAlert />
          </EmptyMedia>
          <EmptyTitle>Oops!</EmptyTitle>
          <EmptyDescription>404 - Page Not Found</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Link href="/">
              {" "}
              <Button>Home Page</Button>
            </Link>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
