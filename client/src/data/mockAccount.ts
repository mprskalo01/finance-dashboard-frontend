// Define types for the mock data
export interface MonthData {
  month: string;
  revenue: number;
  expenses: number;
}

export interface Transaction {
  _id: number;
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
  currentBalance: 161975,
  totalRevenue: 433000,
  totalExpenses: 301100,
  monthlyData: [
    { month: "january", revenue: 17000, expenses: 11800 },
    { month: "february", revenue: 18200, expenses: 11000 },
    { month: "march", revenue: 19400, expenses: 11200 },
    { month: "april", revenue: 25000, expenses: 21500 },
    { month: "may", revenue: 32300, expenses: 21700 },
    { month: "june", revenue: 42500, expenses: 32000 },
    { month: "july", revenue: 52600, expenses: 41700 },
    { month: "august", revenue: 64500, expenses: 42200 },
    { month: "september", revenue: 75500, expenses: 50000 },
    { month: "october", revenue: 86000, expenses: 58000 },
    { month: "november", revenue: 91000, expenses: 62000 },
    { month: "december", revenue: 96000, expenses: 64000 },
  ],
  transactions: [
    {
      _id: 1,
      amount: 240,
      type: "revenue",
      date: "2024-09-30",
      description: "sale of 12 Toothbrush",
    },
    {
      _id: 2,
      amount: 400,
      type: "revenue",
      date: "2024-09-30",
      description: "sale of 20 Toothbrush",
    },
    {
      _id: 3,
      amount: 105,
      type: "expense",
      date: "2024-09-30",
      description: "purchase of 15 Toothbrush",
    },
    {
      _id: 4, // Updated _ID
      amount: 240,
      type: "revenue",
      date: "2024-09-30",
      description: "sale of 12 Toothbrush",
    },
    {
      _id: 5,
      amount: 1200,
      type: "revenue",
      date: "2024-10-04",
      description: "eh eh",
    },
  ],
  createdAt: "2024-09-30T12:01:54.344Z",
  updatedAt: "2024-10-05T09:26:4869Z",
};
