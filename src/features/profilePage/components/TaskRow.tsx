import { type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const progressVariants = cva("h-1 rounded-full", {
  variants: {
    variant: {
      todo: "bg-blue-600",
      done: "bg-green-600",
    },
  },
  defaultVariants: {
    variant: "todo",
  },
});

interface TaskRowProps extends VariantProps<typeof progressVariants> {
  title: string;
  progress?: number;
  icon?: ReactNode;
}

export function TaskRow({
  title,
  progress = 100,
  icon,
  variant,
}: TaskRowProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-lg">{title}</p>

        {icon && icon}
      </div>

      <div className="mt-3 h-1 overflow-hidden rounded-full bg-muted">
        <div
          style={{ width: `${progress}%` }}
          className={cn(progressVariants({ variant }))}
        />
      </div>
    </div>
  );
}
