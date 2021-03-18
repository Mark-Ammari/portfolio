import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import uri from '../../uri/uri';

interface SkillsState {
    skills: [],
    loading: boolean,
    error: boolean,
    errorMessage: string
}

const initialState: SkillsState = {
    skills: [],
    loading: true,
    error: false,
    errorMessage: ""
};

export const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        fetchSkillsStart: state => {
            state.skills = []
            state.loading = true
            state.error = false
            state.errorMessage = ""
        },
        fetchSkillsSuccess: (state, action: PayloadAction<[]>) => {
            state.skills = action.payload
            state.loading = false
            state.error = false
            state.errorMessage = ""
        },
        fetchSkillsFail: (state, action: PayloadAction<string>) => {
            state.skills = []
            state.loading = false
            state.error = false
            state.errorMessage = action.payload
        },
    },
});

export const { fetchSkillsStart, fetchSkillsSuccess, fetchSkillsFail } = skillsSlice.actions;

export const onGetSkills = (): AppThunk => dispatch => {
    dispatch(fetchSkillsStart())
    uri.get("/skills.json")
    .then(response => {
        dispatch(fetchSkillsSuccess(response.data))
    }).catch(error => {
        dispatch(fetchSkillsFail(error))
    })
};

export const skillsData = (state: RootState) => state.skills.skills;
export const loadSkills = (state: RootState) => state.skills.loading;
export const skillsError = (state: RootState) => state.skills.error;
export const skillsErrorMsg = (state: RootState) => state.skills.errorMessage;

export default skillsSlice.reducer;
