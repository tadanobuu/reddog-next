import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ruleSectionProps = {
    title: string,
    children: ReactNode
}

const RuleSection = ({ title, children }: ruleSectionProps) => (
    <Card className="mb-6">
        <CardHeader>
            <CardTitle className="text-lg font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
    </Card>
)

export default RuleSection;