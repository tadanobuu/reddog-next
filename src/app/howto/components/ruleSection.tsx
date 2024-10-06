import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const RuleSection = ({ title, children }) => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
)

export default RuleSection;