
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HealthChart from "@/components/HealthChart";
import HealthRecords from "@/components/HealthRecords";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const healthChartData = [
  {
    name: "Heart Health",
    value: 40,
    color: "#4ade80",
    status: "excellent",
    description: "Based on blood pressure and heart rate readings"
  },
  {
    name: "Nutrition",
    value: 30,
    color: "#facc15",
    status: "fair",
    description: "Based on dietary intake and nutrient levels"
  },
  {
    name: "Physical Activity",
    value: 20,
    color: "#3b82f6",
    status: "good",
    description: "Based on exercise frequency and intensity"
  },
  {
    name: "Sleep",
    value: 10,
    color: "#f87171",
    status: "poor",
    description: "Based on sleep duration and quality"
  }
];

const Dashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [selectedTab, setSelectedTab] = useState("overview");

  const handleAddRecord = () => {
    toast.info("Add record feature coming soon!");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated onLogout={onLogout} />
      <div className="flex-grow pt-20 pb-10 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Health Dashboard</h1>
              <p className="text-muted-foreground">
                Monitor your health metrics and track your progress
              </p>
            </div>
            <Button onClick={handleAddRecord} className="mt-4 md:mt-0">
              Add New Record
            </Button>
          </div>

          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
            <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="records">Health Records</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <HealthChart
                  title="Health Status"
                  description="Your overall health status broken down by category"
                  data={healthChartData}
                />
                
                <Card>
                  <CardHeader>
                    <CardTitle>Summary</CardTitle>
                    <CardDescription>Quick overview of your health</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border p-4 rounded-md space-y-4 bg-secondary/50">
                      <div>
                        <p className="text-sm font-medium">Latest Blood Pressure</p>
                        <p className="text-3xl font-semibold">120/80</p>
                        <p className="text-xs text-muted-foreground">Normal range</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Heart Rate</p>
                        <p className="text-3xl font-semibold">68 bpm</p>
                        <p className="text-xs text-muted-foreground">Resting rate</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Weight</p>
                        <p className="text-3xl font-semibold">70.5 kg</p>
                        <p className="text-xs text-muted-foreground">BMI: 22.8 (Normal)</p>
                      </div>
                    </div>
                    
                    <div className="border p-4 rounded-md space-y-2 bg-accent/50">
                      <h3 className="font-medium">Recommendations</h3>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Consider improving sleep quality with a consistent schedule</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Maintain your excellent heart health with regular cardio exercises</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Focus on increasing protein and fiber intake in your diet</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="records">
              <HealthRecords />
            </TabsContent>
            
            <TabsContent value="insights">
              <Card>
                <CardHeader>
                  <CardTitle>Health Insights</CardTitle>
                  <CardDescription>AI-powered analysis of your health data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border p-6 rounded-lg bg-secondary/20">
                    <h3 className="text-lg font-medium mb-4">Monthly Progress</h3>
                    <p className="text-muted-foreground mb-4">
                      Based on your data from the past month, here's an analysis of your health progress:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Heart Health</span>
                          <span className="text-sm font-medium text-green-600">Improved</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full">
                          <div className="h-2 rounded-full bg-green-500" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Weight Management</span>
                          <span className="text-sm font-medium text-blue-600">Stable</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full">
                          <div className="h-2 rounded-full bg-blue-500" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Sleep Quality</span>
                          <span className="text-sm font-medium text-red-600">Needs Improvement</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full">
                          <div className="h-2 rounded-full bg-red-500" style={{ width: '35%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border p-6 rounded-lg bg-primary/5">
                    <h3 className="text-lg font-medium mb-4">Health Safety Assessment</h3>
                    <p className="mb-4">
                      Based on your current health metrics and history, our AI assessment indicates:
                    </p>
                    <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
                      <p className="font-medium">You are currently in a safe health range</p>
                      <p className="text-sm mt-1">
                        Your vital signs and health indicators are within normal ranges. Continue maintaining your current health routines.
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This assessment is not a medical diagnosis. Always consult with healthcare professionals for medical advice.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
