"use client"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner";
export default function AlertModal({children}) {
        return (
            <html lang="en">
            <body>
                {children}
                <Toaster />
            </body>
            </html>
        )
    }