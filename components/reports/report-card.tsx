import { formatDistanceToNow } from "date-fns"
import { MoreVertical, FileText } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const statusColors = {
  draft: "bg-gray-100 text-gray-800",
  pending: "bg-yellow-100 text-yellow-800",
  approved: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
}

interface ReportCardProps {
  report: any
  onAction: (action: string, report: any) => void
}

export function ReportCard({ report, onAction }: ReportCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={report.author.avatar} />
            <AvatarFallback>{report.author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">{report.author.name}</p>
            <p className="text-sm text-muted-foreground">{report.author.role}</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onAction("edit", report)}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onAction("delete", report)}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-semibold">{report.title}</h3>
          </div>
          <Badge variant="secondary" className={statusColors[report.status]}>
            {report.status}
          </Badge>
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{report.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {report.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        Last modified {formatDistanceToNow(new Date(report.lastModified))} ago
      </CardFooter>
    </Card>
  )
}

