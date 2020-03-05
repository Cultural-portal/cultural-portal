export interface DeveloperActivity {
  name: string;
  activityList: Activity[];
}

interface Activity {
  hours: number;
  description: string;
}
