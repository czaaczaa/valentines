"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";




function ButtonGroupBasic() {
  
  const router = useRouter();
  return (
    <div className="flex min-h-[200px] w-full items-center justify-center">
      <ButtonGroup>
       
        <Button variant="outline" onClick={() => router.push('/pages/invite')}>
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </ButtonGroup>
    </div>
  );
}

export { ButtonGroupBasic };


