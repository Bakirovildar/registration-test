import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    signUpInfo: {
        fullName: '',
        gender: '',
        birthDate: '',
        university: '',
        yearEnding: '',
        workName: '',
        duties: '' 
  }
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            //   state.count += 1;
        },
        decrement: state => {
            //   state.count -= 1;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;