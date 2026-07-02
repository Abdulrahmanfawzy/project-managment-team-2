import { Spinner } from "@/components/ui/spinner";
export default function Loader({sizeNum}) {
  return (
    <div className="flex items-center gap-6"> 
      <Spinner className={`size-${sizeNum}`} />
    </div>
  );
}