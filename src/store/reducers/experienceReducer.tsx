import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import uri from '../../uri/uri';

interface ExperienceState {
    experience: [],
    loading: boolean,
    error: boolean,
    errorMessage: string
}

const initialState: ExperienceState = {
    experience: [],
    loading: true,
    error: false,
    errorMessage: ""
};

export const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        fetchExperienceStart: state => {
            state.experience = []
            state.loading = true
            state.error = false
            state.errorMessage = ""
        },
        fetchExperienceSuccess: (state, action: PayloadAction<[]>) => {
            state.experience = action.payload
            state.loading = false
            state.error = false
            state.errorMessage = ""
        },
        fetchExperienceFail: (state, action: PayloadAction<string>) => {
            state.experience = []
            state.loading = false
            state.error = false
            state.errorMessage = action.payload
        },
    },
});

export const { fetchExperienceStart, fetchExperienceSuccess, fetchExperienceFail } = experienceSlice.actions;

export const onGetExperience = (): AppThunk => dispatch => {
    dispatch(fetchExperienceStart())
    uri.get("/experience.json")
    .then(response => {
        dispatch(fetchExperienceSuccess(response.data))
    }).catch(error => {
        dispatch(fetchExperienceFail(error))
    })
};

export const experienceData = (state: RootState) => state.experience.experience;
export const loadExperience = (state: RootState) => state.experience.loading;
export const experienceError = (state: RootState) => state.experience.error;
export const experienceErrorMsg = (state: RootState) => state.experience.errorMessage;

export default experienceSlice.reducer;
