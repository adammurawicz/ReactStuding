const { createSlice } = require('@reduxjs/toolkit')

export const revenueSlice = createSlice({
    name:'revenueState',
    initialState: {
        revenueList: [
            {name: 'salary', price: 4000},
            {name: 'benefit', price: 182}
        ]
    },
    reducers: {
        addRevenueAction: (currentSlice, action) => {
            currentSlice.revenueList.push(action.payload)
        }
    }
})

export const { addRevenueAction } = revenueSlice.actions