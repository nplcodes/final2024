// src/IssueContext.js
import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const IssueContext = createContext();

const initialState = {
  issues: [],
};

const issueReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_ISSUES':
      return { ...state, issues: action.payload };
    case 'ASSIGN_ISSUE':
      const assignedIssueId = action.payload;
      return {
        ...state,
        issues: state.issues.filter(issue => issue._id !== assignedIssueId)
      };
    case 'REJECT_ISSUE':
      const rejectedIssueId = action.payload;
      return {
        ...state,
        issues: state.issues.filter(issue => issue._id !== rejectedIssueId)
      };
    default:
      return state;
  }
};

const loadFromLocalStorage = () => {
  const storedIssues = localStorage.getItem('issues');
  return storedIssues ? JSON.parse(storedIssues) : [];
};

const saveToLocalStorage = (issues) => {
  localStorage.setItem('issues', JSON.stringify(issues));
};

const IssueProvider = ({ children }) => {
  const [state, dispatch] = useReducer(issueReducer, initialState);

  useEffect(() => {
    const issues = loadFromLocalStorage();
    dispatch({ type: 'FETCH_ISSUES', payload: issues });

    // Simulated API call
    axios.get('http://localhost:8080/issue/open')
      .then(response => {
        dispatch({ type: 'FETCH_ISSUES', payload: response.data });
      })
      .catch(error => {
        console.error('Error fetching issues:', error);
      });
  }, []);

  const assignIssueToStaff = (issueId) => {
    dispatch({ type: 'ASSIGN_ISSUE', payload: issueId });
  };

  const rejectIssue = (issueId) => {
    dispatch({ type: 'REJECT_ISSUE', payload: issueId });
  };

  useEffect(() => {
    saveToLocalStorage(state.issues);
  }, [state.issues]);

  return (
    <IssueContext.Provider value={{ state, assignIssueToStaff, rejectIssue }}>
      {children}
    </IssueContext.Provider>
  );
};

export { IssueContext, IssueProvider };
