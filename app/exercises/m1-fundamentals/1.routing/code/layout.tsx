import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function Project1Layout({ children } : { children: React.ReactNode}) {
    return (
        <Card>
            <CardTitle className="px-6 py-6">
                Page layout.tsx
            </CardTitle>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}