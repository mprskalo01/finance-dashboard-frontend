// import { useState } from "react";
import { HashLoader } from "react-spinners";
import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import TransactionList from "./lists/TransactionList";
import { mockAccount } from "@/data/mockAccount";

const Row2 = () => {
  const { palette } = useTheme();

  const loading = false;

  const lastMonth = mockAccount.monthlyData.length - 1;
  const currentMonthRevenue = mockAccount.monthlyData[lastMonth].revenue;
  const currentMonthExpenses = mockAccount.monthlyData[lastMonth].expenses;
  const currentMonthProfit = currentMonthRevenue - currentMonthExpenses;
  return (
    <>
      <DashboardBox gridArea='e'>
        {loading ? (
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='100%'
          >
            <div>
              <HashLoader color='#4f46e5' size={100} />
              <Typography
                variant='h2'
                fontWeight='bold'
                style={{ color: "#4f46e5" }}
              >
                Loading...
              </Typography>
            </div>
          </Box>
        ) : (
          <>
            <BoxHeader
              title='Last Month Performance (2024)'
              sideText={`December 2024`}
            />
            <Box
              height='100%'
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
            >
              <FlexBetween sx={{ gap: "1.5rem" }}>
                <div>
                  <Typography
                    variant='h3'
                    fontWeight='bold'
                    color={palette.tertiary[500]}
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        sm: "1.5rem",
                        md: "1rem",
                        xl: "1.25rem",
                      },
                    }}
                  >
                    Revenue
                  </Typography>
                  <Typography
                    variant='h4'
                    color={palette.tertiary[500]}
                    mt={2}
                    sx={{
                      marginBottom: "4rem",
                      fontSize: {
                        xs: "1rem",
                        sm: "1.5rem",
                        md: "1rem",
                        xl: "1.25rem",
                      },
                    }}
                  >
                    ${currentMonthRevenue.toLocaleString()}
                  </Typography>
                </div>

                <div>
                  <Typography
                    variant='h3'
                    fontWeight='bold'
                    color={palette.secondary[500]}
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        sm: "1.5rem",
                        md: "1rem",
                        xl: "1.25rem",
                      },
                    }}
                  >
                    Expenses
                  </Typography>
                  <Typography
                    variant='h4'
                    color={palette.secondary[500]}
                    mt={2}
                    sx={{
                      marginBottom: "4rem",
                      fontSize: {
                        xs: "1rem",
                        sm: "1.5rem",
                        md: "1rem",
                        xl: "1.25rem",
                      },
                    }}
                  >
                    ${currentMonthExpenses.toLocaleString()}
                  </Typography>
                </div>

                <div>
                  <Typography
                    variant='h3'
                    fontWeight='bold'
                    color={palette.primary[500]}
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        sm: "1.5rem",
                        md: "1rem",
                        xl: "1.25rem",
                      },
                    }}
                  >
                    Profit
                  </Typography>
                  <Typography
                    variant='h4'
                    color={palette.primary[300]}
                    mt={2}
                    sx={{
                      marginBottom: "4rem",
                      fontSize: {
                        xs: "1rem",
                        sm: "1.5rem",
                        md: "1rem",
                        xl: "1.25rem",
                      },
                    }}
                  >
                    ${currentMonthProfit.toLocaleString()}
                  </Typography>
                </div>
              </FlexBetween>
            </Box>
          </>
        )}
      </DashboardBox>
      <TransactionList />
    </>
  );
};

export default Row2;
