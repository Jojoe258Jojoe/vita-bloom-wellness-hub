
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

interface HealthRecord {
  id: string;
  date: Date;
  bloodPressure: string;
  heartRate: number;
  weight: number;
  bloodSugar: number;
  notes: string;
  status: "normal" | "caution" | "alert";
}

const mockRecords: HealthRecord[] = [
  {
    id: "1",
    date: new Date(2025, 3, 25),
    bloodPressure: "120/80",
    heartRate: 68,
    weight: 70.5,
    bloodSugar: 95,
    notes: "Feeling good today",
    status: "normal",
  },
  {
    id: "2",
    date: new Date(2025, 3, 18),
    bloodPressure: "118/78",
    heartRate: 72,
    weight: 70.2,
    bloodSugar: 92,
    notes: "After morning workout",
    status: "normal",
  },
  {
    id: "3",
    date: new Date(2025, 3, 11),
    bloodPressure: "130/85",
    heartRate: 80,
    weight: 71.0,
    bloodSugar: 105,
    notes: "Stressful day at work",
    status: "caution",
  },
  {
    id: "4",
    date: new Date(2025, 3, 4),
    bloodPressure: "125/82",
    heartRate: 75,
    weight: 71.2,
    bloodSugar: 100,
    notes: "After dinner reading",
    status: "caution",
  },
  {
    id: "5",
    date: new Date(2025, 2, 28),
    bloodPressure: "115/75",
    heartRate: 65,
    weight: 70.8,
    bloodSugar: 90,
    notes: "Morning reading, fasting",
    status: "normal",
  },
];

const HealthRecords = () => {
  const [timeframe, setTimeframe] = useState("all");
  const [records, setRecords] = useState<HealthRecord[]>(mockRecords);

  const handleTimeframeChange = (value: string) => {
    setTimeframe(value);
    
    const now = new Date();
    let filteredRecords = [...mockRecords];
    
    if (value === "week") {
      const oneWeekAgo = new Date(now.setDate(now.getDate() - 7));
      filteredRecords = mockRecords.filter(record => record.date >= oneWeekAgo);
    } else if (value === "month") {
      const oneMonthAgo = new Date(now.setMonth(now.getMonth() - 1));
      filteredRecords = mockRecords.filter(record => record.date >= oneMonthAgo);
    } else if (value === "year") {
      const oneYearAgo = new Date(now.setFullYear(now.getFullYear() - 1));
      filteredRecords = mockRecords.filter(record => record.date >= oneYearAgo);
    }
    
    setRecords(filteredRecords);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
        return "bg-green-100 text-green-800";
      case "caution":
        return "bg-yellow-100 text-yellow-800";
      case "alert":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Health Records</CardTitle>
        <div className="flex items-center space-x-2">
          <Select value={timeframe} onValueChange={handleTimeframeChange}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="week">Past Week</SelectItem>
                <SelectItem value="month">Past Month</SelectItem>
                <SelectItem value="year">Past Year</SelectItem>
                <SelectItem value="all">All Records</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button size="sm" variant="outline">
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Blood Pressure</TableHead>
                <TableHead>Heart Rate</TableHead>
                <TableHead>Weight (kg)</TableHead>
                <TableHead>Blood Sugar</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {records.length > 0 ? (
                records.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{format(record.date, "MMM d, yyyy")}</TableCell>
                    <TableCell>{record.bloodPressure}</TableCell>
                    <TableCell>{record.heartRate}</TableCell>
                    <TableCell>{record.weight}</TableCell>
                    <TableCell>{record.bloodSugar}</TableCell>
                    <TableCell>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                          record.status
                        )}`}
                      >
                        {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      {record.notes}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-4">
                    No records found for the selected timeframe.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthRecords;
