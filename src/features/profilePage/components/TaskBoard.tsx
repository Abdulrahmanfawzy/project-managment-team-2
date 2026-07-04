import { type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const boardVariants = cva(
  "overflow-hidden rounded-3xl border bg-white shadow-sm",
  {
    variants: {
      variant: {
        todo: "",
        done: "",
      },
    },
    defaultVariants: {
      variant: "todo",
    },
  },
);

const headerVariants = cva(
  "flex items-center justify-between border-b px-6 py-5",
  {
    variants: {
      variant: {
        todo: "bg-gray-100 text-gray-900",
        done: "bg-green-50 text-green-600",
      },
    },
    defaultVariants: {
      variant: "todo",
    },
  },
);

interface TaskBoardProps extends VariantProps<typeof boardVariants> {
  title: string;
  count: number;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function TaskBoard({
  title,
  count,
  icon,
  children,
  variant,
  className,
}: TaskBoardProps) {
  return (
    <div className={cn(boardVariants({ variant }), className)}>
      <div className={cn(headerVariants({ variant }))}>
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-semibold">{title}</h2>

          {icon && icon}
        </div>

        <span className="text-lg font-medium">{count}</span>
      </div>

      <div className="p-5">
        <div className="mb-5 grid grid-cols-[1fr_auto] text-sm text-muted-foreground">
          <span>Name</span>
          <span>Tasks</span>
        </div>

        <div className="space-y-5">{children}</div>
      </div>
    </div>
  );
}
