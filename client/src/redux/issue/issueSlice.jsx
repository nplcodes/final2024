import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  issues: [],
  studentIssues: [],
  // Assigned to mstaff
  assignedToMe: [],
  newIssues: [],
  progressIssues: [],

  comments: [],
  loading: false,
  error: null,
  posts: [],
  selectedPost: null,
  singlePost: null,
  assignedTo: null,
  chatRoomIssue: [],
  IssueReporter: [],
  groupComment: [],
  StudentStaffComment:[],
  unassignedIssues: [], // Issues not assigned to staff
  assignedIssues: [], // Issues assigned to staff

  // Notification on issue
  notifications: [],
  unReadNots: [],
  // Post notification
  


};

const issueSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {

    setNots: (state, action) => {
      state.notifications=action.payload;
      state.unReadNots = state.notifications.filter((not) => not.isRead === false);

      },
      removeReadedNots: (state, action)=>{
        const notificationId= action.payload;
        state.unReadNots = state.unReadNots.filter((not) => not._id !== notificationId);

      },

    //Opened Issues on middleman page
    setIssues: (state, action) => {
      state.issues=action.payload;
      state.unassignedIssues = state.issues.filter((issue) => issue.status === 'open');
      state.assignedIssues = state.issues.filter((issue) => issue.status === 'assigned');

      },
      
      // post like
      addLike: (state, action) => {
        const { postId, userId } = action.payload;
        const post = state.posts.find((post) => post._id === postId);
        if (post) {
          if (!post.likes.includes(userId)) {
            post.likes.push(userId);
          } else {
            post.likes = post.likes.filter((id) => id !== userId);
          }
        }
      },
      addComment: (state, action) => {
        const { postId, comment } = action.payload;
        const post = state.posts.find((post) => post._id === postId);
        if (post) {
          post.comments.push(comment);
        }
      },
    //   delete opened issue from middleman page
      removeAssignedIssue: (state, action)=>{
        const issueId= action.payload;
        state.unassignedIssues = state.unassignedIssues.filter((issue) => issue._id !== issueId);

      },
      // Post actions
      // Add post to state
      addPost: (state, action) => {
        state.posts.unshift(action.payload);
      },
      // initialize posts state
      setPosts: (state, action) => {
        state.posts = action.payload;
      },
      selectPost: (state, action)=>{
        state.selectedPost = action.payload;
      },
      setSinglePost: (state, action)=>{
        state.singlePost = action.payload;
      },
      setAssignedTo: (state, action)=>{
        state.assignedTo = action.payload
      },
      setChatRoomIssue: (state, action)=>{
        state.chatRoomIssue = action.payload;
      },
      setIssueReporter: (state, action)=>{
        state.IssueReporter = action.payload;
      },
      setGroupComment: (state, action)=>{
        state.groupComment=(action.payload)
      },
      addGroupComment: (state, action) => {
        state.groupComment.push(action.payload);
      },
      addStaffStudentComment: (state, action) => {
        state.StudentStaffComment.push(action.payload);
      },
      setStaffStudentComment: (state, action) => {
        state.StudentStaffComment=(action.payload);
      },
      // Post notification
  
    
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
    // student 
    getStudentIssue: (state, action)=>{
      state.issues =  action.payload;
      sessionStorage.setItem('issueState', JSON.stringify(state));
    },
    getIssueDetails: (state, action) => {
      state.studentIssues = action.payload;
    },
    // Issues assigned to logged in staff
    setAssignedToMe: (state, action) => {
      state.assignedToMe = action.payload;
      state.newIssues = state.assignedToMe.filter((issue) => issue.isRead === false);
      state.progressIssues = state.assignedToMe.filter((issue) => issue.isRead === true);
    },
    commentsOnIssue: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const issueActions = issueSlice.actions;
export default issueSlice;
