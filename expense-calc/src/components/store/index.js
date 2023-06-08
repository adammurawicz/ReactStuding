import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import { revenueSlice } from "./revenue/revenue-slice";

const store = configureStore({
    reducer: {
        EXPENSE: expenseSlice.reducer,
        REVENUE: revenueSlice.reducer
    }
})

export { store }