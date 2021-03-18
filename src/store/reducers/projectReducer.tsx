import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import uri from '../../uri/uri';

interface ProjectState {
    project: [],
    loading: boolean,
    error: boolean,
    errorMessage: string
}

const initialState: ProjectState = {
    project: [],
    loading: true,
    error: false,
    errorMessage: ""
};

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        fetchProjectStart: state => {
            state.project = []
            state.loading = true
            state.error = false
            state.errorMessage = ""
        },
        fetchProjectSuccess: (state, action: PayloadAction<[]>) => {
            state.project = action.payload
            state.loading = false
            state.error = false
            state.errorMessage = ""
        },
        fetchProjectFail: (state, action: PayloadAction<string>) => {
            state.project = []
            state.loading = false
            state.error = false
            state.errorMessage = action.payload
        },
    },
});

export const { fetchProjectStart, fetchProjectSuccess, fetchProjectFail } = projectSlice.actions;

export const onGetProject = (): AppThunk => dispatch => {
    dispatch(fetchProjectStart())
    uri.get("/projects.json")
    .then(response => {
        dispatch(fetchProjectSuccess(response.data))
    }).catch(error => {
        dispatch(fetchProjectFail(error))
    })
};

export const projectData = (state: RootState) => state.project.project;
export const loadProject = (state: RootState) => state.project.loading;
export const projectError = (state: RootState) => state.project.error;
export const projectErrorMsg = (state: RootState) => state.project.errorMessage;

export default projectSlice.reducer;
