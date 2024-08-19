import { createSlice } from '@reduxjs/toolkit';


const visibilitySlice = createSlice({
    name: 'visibility', // 즉, plus 액션은 'counter/plus' 라는 타입이다.
    initialState: { value: false },
    reducers: {
        changeVisibility: (state) => {
            state.value = state.value === false ? true : false;
        }
    },
});

export const { changeVisibility } = visibilitySlice.actions;

export default visibilitySlice.reducer;
