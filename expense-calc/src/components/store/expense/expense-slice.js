const { createSlice } = require('@reduxjs/toolkit')

export const expenseSlice = createSlice({
    name:'expenseState',
    initialState: {
        expenseList: [
            {name: 'rent a flat', price: 2200},
            {name: 'laptop loan', price: 300},
            {name: 'gym', price: 200}
        ]
    },
    // funkcja odpowiedzialna za uaktualnianie danych w slice
    reducers: {
        addExpenseAction: (currentSlice, action) => {
            currentSlice.expenseList.push(action.payload)
        }
    }
})

// export funkcji
export const { addExpenseAction } = expenseSlice.actions