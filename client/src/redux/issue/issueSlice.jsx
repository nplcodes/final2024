import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  issues: [],
  studentIssues: [],
  loading: false,
  error: null,
};

const issueSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    // Add a new issue
    addNewIssueStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addNewIssueSuccess: (state, action) => {
      state.issues.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    addNewIssueFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Opened Issues on middleman page
    setIssues: (state, action) => {
        state.issues=action.payload;
      },
    //   delete opened issue from middleman page
      removeAssignedIssue: (state, action)=>{
        const {issueId, status} = action.payload;
        state.issues.status = status;
        state.issues = state.issues.filter((issue) => issue.id !== issueId);

      },
    
    // Update an issue
    updateIssueStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateIssueSuccess: (state, action) => {
      const { issueId, updatedIssue } = action.payload;
      const issueIndex = state.issues.findIndex((issue) => issue.id === issueId);
      if (issueIndex !== -1) {
        state.issues[issueIndex] = updatedIssue;
      }
      state.loading = false;
      state.error = null;
    },
    updateIssueFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    // Assign an issue to staff
    assignIssueToStaffStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    assignIssueToStaffSuccess: (state, action) => {
      const { issueId, selectedStaff } = action.payload;
      const issueIndex = state.issues.findIndex((issue) => issue.id === issueId);
      if (issueIndex !== -1) {
        state.issues[issueIndex].assignedTo = selectedStaff;
      }
      state.loading = false;
      state.error = null;
    },
    assignIssueToStaffFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    // Delete an issue
    deleteIssueStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteIssueSuccess: (state, action) => {
      const issueId = action.payload;
      state.issues = state.issues.filter((issue) => issue.id !== issueId);
      state.loading = false;
      state.error = null;
    },
    deleteIssueFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // student 
    getStudentIssue: (state, action)=>{
      state.issues =  action.payload;
      localStorage.setItem('issueState', JSON.stringify(state));
    },
    getIssueDetails: (state, action) => {
      state.studentIssues = action.payload;
    },
  },
});

export const issueActions = issueSlice.actions;
export default issueSlice;
