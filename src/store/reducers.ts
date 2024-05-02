import { createSlice } from '@reduxjs/toolkit';

export interface IState {
    fullName: string
    gender: string
    birthDate: string
    university: string
    yearEnding: string
    workName: string
    duties: string
}

const initialState: IState = {
    fullName: '',
    gender: '',
    birthDate: '',
    university: '',
    yearEnding: '',
    workName: '',
    duties: ''
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        saveInfoHandler: (state, action) => {
            const { name, value } = action.payload;
            switch (name) {
                case 'fullName':
                    state.fullName = value;
                    break;
                case 'gender':
                    state.gender = value;
                    break;
                case 'birthDate':
                    state.birthDate = value;
                    break;
                case 'university':
                    state.university = value;
                    break;
                case 'yearEnding':
                    state.yearEnding = value;
                    break;
                case 'workName':
                    state.workName = value;
                    break;
                case 'duties':
                    state.duties = value;
                    break;
            }
        }
    }
});

export const { saveInfoHandler } = counterSlice.actions;
export default counterSlice.reducer;