import React, { useState } from "react";
import { useTheme, Box, Button, Typography, IconButton } from "@mui/material";
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
} from "recharts";
import regression, { DataPoint } from "regression";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import Navbar from "@/components/navbar";
import Svgs from "@/assets/Svgs";
import { mockAccount } from "@/data/mockAccount";

const Predictions: React.FC = () => {
  const { palette } = useTheme();
  const [isPredictions, setIsPredictions] = useState(false);
  const [isCurrentYearPredictions, setIsCurrentYearPredictions] =
    useState(false);
  const [showAreaChart, setShowAreaChart] = useState(true);

  const account = mockAccount;
  const lstmPredictions = [
    500, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100,
  ];

  if (!account) {
    return null; // Render nothing if account data is unavailable
  }

  const allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthData = account.monthlyData;
  const formatted: Array<DataPoint> = monthData.map(({ revenue }, i) => [
    i,
    revenue,
  ]);
  const regressionLine = regression.linear(formatted);

  const data = allMonths.map((month, i) => {
    const actualData = monthData.find(
      (data) => data.month.toLowerCase() === month.toLowerCase()
    );
    return {
      name: month,
      "Actual Revenue": actualData ? actualData.revenue : null,
      "Regression Line": regressionLine.points[i]?.[1] ?? null,
      "Next Year Predicted Revenue": regressionLine.predict(
        i + monthData.length
      )[1],
      "Current Year Predicted Revenue": lstmPredictions[i] || null,
    };
  });

  const numericValues = data.flatMap((d) =>
    [
      "Actual Revenue",
      "Regression Line",
      "Next Year Predicted Revenue",
      "Current Year Predicted Revenue",
    ]
      .map((key) => d[key as keyof typeof d])
      .filter((value): value is number => value !== null)
  );

  const minValue = Math.min(...numericValues);
  const maxValue = Math.max(...numericValues);

  const handleChartToggle = () => setShowAreaChart((prev) => !prev);

  return (
    <>
      <Navbar />
      <DashboardBox width='100%' height='100%' p='1rem' overflow='hidden'>
        <FlexBetween m='1rem 2.5rem' gap='1rem'>
          <Box>
            <Typography variant='h3'>
              <span style={{ color: palette.tertiary[500] }}>Revenue</span> &{" "}
              <span style={{ color: "#0ea5e9" }}>Predictions</span>
              <IconButton
                onClick={handleChartToggle}
                size='small'
                sx={{
                  backgroundColor: "rgba(14, 165, 233, 0.4)",
                  marginLeft: "1rem",
                  "&:hover": {
                    backgroundColor: "rgba(14, 165, 233, 0.7)",
                    transform: "scale(1.1)",
                  },
                  borderRadius: "4px",
                }}
              >
                {showAreaChart ? (
                  <Svgs.barSvg strokeColor='#F0F0F0' />
                ) : (
                  <Svgs.areaChartSvg fillColor='#F0F0F0' />
                )}
              </IconButton>
            </Typography>
            <Typography variant='h6'>
              LSTM AI Model disabled in frontend as I developed it in the
              backend
            </Typography>
          </Box>
          <FlexBetween gap='1rem'>
            <Button
              onClick={() => setIsPredictions(!isPredictions)}
              sx={{
                color: palette.grey[100],
                backgroundColor: "#519DE9",
                boxShadow: "0.1rem 0.1rem 0.1rem rgba(0,0,0,0.4)",
                "&:hover": { transform: "scale(1.15)" },
              }}
            >
              {isPredictions ? "Hide " : "Show "}Next Year Predictions
            </Button>
            <Button
              onClick={() =>
                setIsCurrentYearPredictions(!isCurrentYearPredictions)
              }
              disabled
              sx={{
                backgroundColor: "#363637",
                boxShadow: "0.1rem 0.1rem 0.1rem rgba(0,0,0,0.4)",
                "&:hover": { transform: "scale(1.15)" },
              }}
            >
              {isCurrentYearPredictions ? "Hide " : "Show "}Current Year
              Predictions
            </Button>
          </FlexBetween>
        </FlexBetween>
        <ResponsiveContainer width='100%' height='100%'>
          {showAreaChart ? (
            <LineChart
              data={data}
              margin={{ top: 20, right: 75, left: 20, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray='3 3' stroke={palette.grey[800]} />
              <XAxis
                dataKey='name'
                tickLine={false}
                style={{ fontSize: "10px" }}
              >
                <Label value='Month' offset={-5} position='insideBottom' />
              </XAxis>
              <YAxis
                domain={[Math.min(minValue - 200, 0), maxValue + 200]}
                style={{ fontSize: "10px" }}
                tickFormatter={(v) => `$${v}`}
              >
                <Label
                  value='Revenue in USD'
                  angle={-90}
                  position='insideLeft'
                />
              </YAxis>
              <Tooltip />
              <Legend verticalAlign='top' />
              <Line
                type='monotone'
                dataKey='Actual Revenue'
                stroke={palette.tertiary[500]}
                strokeWidth={3}
              />
              <Line
                type='monotone'
                dataKey='Regression Line'
                stroke='#e11d48'
                strokeWidth={isPredictions ? 3 : 0}
                dot={false}
                opacity={isPredictions ? 1 : 0}
              />
              <Line
                type='monotone'
                dataKey='Next Year Predicted Revenue'
                stroke='#519DE9'
                strokeDasharray='5 5'
                strokeWidth={isPredictions ? 3 : 0}
                dot={false}
                opacity={isPredictions ? 1 : 0}
              />
              {/* <Line
                type='monotone'
                dataKey='Current Year Predicted Revenue'
                stroke='#8BC1F7'
                strokeDasharray='3 3'
                strokeWidth={isCurrentYearPredictions ? 3 : 0}
                dot={false}
                opacity={isCurrentYearPredictions ? 1 : 0}
              /> */}
            </LineChart>
          ) : (
            <BarChart
              data={data}
              margin={{ top: 20, right: 75, left: 20, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray='3 3' stroke={palette.grey[800]} />
              <XAxis
                dataKey='name'
                tickLine={false}
                style={{ fontSize: "10px" }}
              >
                <Label value='Month' offset={-5} position='insideBottom' />
              </XAxis>
              <YAxis
                domain={[Math.min(minValue - 200, 0), maxValue + 200]}
                style={{ fontSize: "10px" }}
                tickFormatter={(v) => `$${v}`}
              >
                <Label
                  value='Revenue in USD'
                  angle={-90}
                  position='insideLeft'
                />
              </YAxis>
              <Tooltip />
              <Legend verticalAlign='top' />
              <Bar dataKey='Actual Revenue' fill={palette.tertiary[500]} />
              <Bar
                dataKey='Current Year Predicted Revenue'
                fill='#8BC1F7'
                opacity={isCurrentYearPredictions ? 1 : 0}
              />
              <Bar
                dataKey='Next Year Predicted Revenue'
                fill='#1e82af'
                opacity={isPredictions ? 1 : 0}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Predictions;
