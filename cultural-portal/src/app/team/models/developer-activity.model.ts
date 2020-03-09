export interface DeveloperActivity {
  name: string;
  activityList: Activity[];
}

export interface Activity {
  hours: number;
  description: string;
}
