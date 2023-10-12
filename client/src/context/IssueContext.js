// IssueContext.js

import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  issues: [], // Array to store issues fetched from MongoDB
  totalIssues: 0, // Initialize totalIssues to 0

};

const issueReducer = (state, action) => {
    switch (action.type) {
      case 'SET_ISSUES':
        return {
          ...state,
          issues: action.payload,
          totalIssues: action.payload.length, // Update totalIssues
        };
      case 'ASSIGN_STAFF':
        const updatedIssues = state.issues.filter((issue) => issue._id !== action.payload);
        localStorage.setItem('issues', JSON.stringify(updatedIssues));
        return {
          ...state,
          issues: updatedIssues,
          totalIssues: state.totalIssues - 1, // Decrement totalIssues

        };
      default:
        throw new Error('Unknown action type');
    }
  };

const IssueContext = createContext();

const IssueProvider = ({ children }) => {
  const [state, dispatch] = useReducer(issueReducer, initialState);

  useEffect(() => {
    // Fetch issues using Axios from your MongoDB API and set them in the state
    const fetchIssues = async () => {
      try {
        const response = await axios.get('http://localhost:8080/issue/open');
        dispatch({ type: 'SET_ISSUES', payload: response.data });
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };

    fetchIssues();
  }, []);

  return <IssueContext.Provider value={state }>{children}</IssueContext.Provider>;
};

export { IssueProvider, IssueContext };
