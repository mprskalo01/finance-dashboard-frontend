// Define types for the mock data
export interface MonthData {
  month: string;
  revenue: number;
  expenses: number;
}

export interface Transaction {
  amount: number;
  type: "revenue" | "expense";
  date: string;
  description: string;
}

export interface Account {
  userId: string;
  currentBalance: number;
  totalRevenue: number;
  totalExpenses: number;
  monthlyData: MonthData[];
  transactions: Transaction[];
  createdAt: string;
  updatedAt: string;
}

export const mockAccount: Account = {
  userId: "66f84f82da0f82699ddf522c",
  currentBalance: 11975.0,
  totalRevenue: 433000.0,
  totalExpenses: 301100.0,
  monthlyData: [
    { month: "january", revenue: 17000.0, expenses: 11800.0 },
    { month: "february", revenue: 18200.0, expenses: 11000.0 },
    { month: "march", revenue: 19400.0, expenses: 11200.0 },
    { month: "april", revenue: 25000.0, expenses: 21500.0 },
    { month: "may", revenue: 32300.0, expenses: 21700.0 },
    { month: "june", revenue: 42500.0, expenses: 32000.0 },
    { month: "july", revenue: 52600.0, expenses: 41700.0 },
    { month: "august", revenue: 64500.0, expenses: 42200.0 },
    { month: "september", revenue: 75500.0, expenses: 50000.0 },
    { month: "october", revenue: 86000.0, expenses: 58000.0 },
  ],
  transactions: [
    {
      amount: 240.0,
      type: "revenue",
      date: "2024-09-30",
      description: "sale of 12 Toothbrush",
    },
    {
      amount: 400.0,
      type: "revenue",
      date: "2024-09-30",
      description: "sale of 20 Toothbrush",
    },
    {
      amount: 105.0,
      type: "expense",
      date: "2024-09-30",
      description: "purchase of 15 Toothbrush",
    },
    {
      amount: 240.0,
      type: "revenue",
      date: "2024-09-30",
      description: "sale of 12 Toothbrush",
    },
    {
      amount: 1200.0,
      type: "revenue",
      date: "2024-10-04",
      description: "eh eh",
    },
  ],
  createdAt: "2024-09-30T12:01:54.344Z",
  updatedAt: "2024-10-05T09:26:48.069Z",
};
