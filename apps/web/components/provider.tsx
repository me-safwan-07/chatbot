"use client";

import { SessionProvider } from "next-auth/react"
import { NuqsAdapter } from "nuqs/adapters/next"

export const Provider = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <NuqsAdapter>
            <SessionProvider>
                {children}
            </SessionProvider>
        </NuqsAdapter>
    )
}