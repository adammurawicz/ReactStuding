const { createSlice } = require('@reduxjs/toolkit')

export const revenueSlice = createSlice({
    name:'revenueState',
    initialState: {
        revenueList: [
            {name: 'salary', price: 4000},
            {name: 'benefit', price: 182}
        ]
    }
})