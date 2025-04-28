
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Button } from '@/components/ui/button';

interface HealthData {
  name: string;
  value: number;
  color: string;
  status: 'excellent' | 'good' | 'fair' | 'poor';
  description: string;
}

interface ChartProps {
  title: string;
  description: string;
  data: HealthData[];
}

const HealthChart = ({ title, description, data }: ChartProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handlePieClick = (data: any, index: number) => {
    setActiveIndex(index);
    const item = data[index];
    
    let feedbackMessage = '';
    switch (item.status) {
      case 'excellent':
        feedbackMessage = `Your ${item.name.toLowerCase()} is excellent! Keep up the great work.`;
        break;
      case 'good':
        feedbackMessage = `Your ${item.name.toLowerCase()} is good. Minor adjustments could help improve further.`;
        break;
      case 'fair':
        feedbackMessage = `Your ${item.name.toLowerCase()} needs attention. Consider making some lifestyle changes.`;
        break;
      case 'poor':
        feedbackMessage = `Your ${item.name.toLowerCase()} requires immediate attention. Please consult your healthcare provider.`;
        break;
      default:
        feedbackMessage = `Information about your ${item.name.toLowerCase()}.`;
    }
    
    setFeedback(feedbackMessage);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-md shadow-lg border border-border">
          <p className="font-medium">{data.name}</p>
          <p className="text-sm text-muted-foreground">Value: {data.value}</p>
          <p className="text-sm font-medium capitalize" style={{ color: data.color }}>
            Status: {data.status}
          </p>
          <p className="text-xs mt-1 text-muted-foreground">{data.description}</p>
        </div>
      );
    }
    return null;
  };

  const renderHealthSummary = () => {
    const totalItems = data.length;
    const excellentItems = data.filter(item => item.status === 'excellent').length;
    const goodItems = data.filter(item => item.status === 'good').length;
    const fairItems = data.filter(item => item.status === 'fair').length;
    const poorItems = data.filter(item => item.status === 'poor').length;
    
    let overallStatus = 'good';
    let message = 'You are in good health overall.';
    
    if (poorItems > 0) {
      overallStatus = 'needs attention';
      message = 'Some aspects of your health need immediate attention.';
    } else if (fairItems > totalItems / 3) {
      overallStatus = 'fair';
      message = 'Your health is fair, but could use improvement in some areas.';
    } else if (excellentItems > totalItems / 2) {
      overallStatus = 'excellent';
      message = 'You are in excellent health! Keep up the great work.';
    }
    
    return (
      <div className="mt-4 p-4 bg-background rounded-lg border border-border">
        <h4 className="font-medium mb-2">Overall Assessment</h4>
        <p className="text-sm text-muted-foreground">{message}</p>
        <div className="mt-2">
          <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
            overallStatus === 'excellent' ? 'bg-green-100 text-green-800' :
            overallStatus === 'good' ? 'bg-blue-100 text-blue-800' :
            overallStatus === 'fair' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {overallStatus.charAt(0).toUpperCase() + overallStatus.slice(1)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                innerRadius={40}
                paddingAngle={5}
                dataKey="value"
                onClick={(_, index) => handlePieClick(data, index)}
                animationDuration={1000}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color} 
                    stroke={activeIndex === index ? '#fff' : 'transparent'} 
                    strokeWidth={activeIndex === index ? 2 : 0}
                    className="transition-all duration-300 hover:opacity-80"
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {feedback && (
          <div className="mt-4 p-4 bg-primary/5 rounded-lg">
            <p className="text-sm">{feedback}</p>
            <Button variant="link" size="sm" className="p-0 mt-2" onClick={() => setFeedback(null)}>
              Dismiss
            </Button>
          </div>
        )}
        
        {renderHealthSummary()}
      </CardContent>
    </Card>
  );
};

export default HealthChart;
