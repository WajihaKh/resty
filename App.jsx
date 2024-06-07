import React, { useReducer, useEffect } from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';

const initialState = {
  data: null,
  headers: null,
  loading: false,
  requestParams: {},
  history: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'SET_DATA':
      return { ...state, data: action.payload.data, headers: action.payload.headers, loading: false };
    case 'SET_REQUEST_PARAMS':
      return { ...state, requestParams: action.payload };
    case 'ADD_HISTORY':
      return { ...state, history: [...state.history, action.payload] };
    case 'SET_ERROR':
      return { ...state, data: { error: 'Failed to fetch data' }, loading: false };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const callApi = async () => {
      dispatch({ type: 'SET_LOADING' });

      try {
        const { url, method, body } = state.requestParams;
        const options = {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: method !== 'GET' && body ? JSON.stringify(body) : undefined,
        };

        const response = await fetch(url, options);
        const responseData = await response.json();
        // console.log(Object.fromEntries(response.headers.entries()) );

        dispatch({
          type: 'SET_DATA',
          payload: { data: responseData, headers: Object.fromEntries(response.headers.entries()) },
        });

        dispatch({
          type: 'ADD_HISTORY',
          payload: { method, url, results: responseData, headers: Object.fromEntries(response.headers.entries())},
        });
      } catch (error) {
        dispatch({ type: 'SET_ERROR' });
      }
    };

    if (Object.keys(state.requestParams).length !== 0) {
      callApi();
    }
  }, [state.requestParams]);

  const handleApiCall = (params) => {
    dispatch({ type: 'SET_REQUEST_PARAMS', payload: params });
  };

  const handleHistoryClick = (historyItem) => {
    console.log(historyItem);
    dispatch({
      type: 'SET_DATA',
      payload: { 
        data: historyItem.results, 
        headers: historyItem.headers },
    });
  };

  return (
    <React.Fragment>
      <Header />
      <Form handleApiCall={handleApiCall} />
      <Results data={state.data} headers={state.headers} loading={state.loading} />
      <History history={state.history} onHistoryClick={handleHistoryClick} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
