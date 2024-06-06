import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App.jsx';

// describe('App', () => {
//     it('')
// })

describe('App', () => {

    it('should do a get api call', () => {
  
      render(<App />);
  
      const urlInput = screen.getByTestId('url-input');
      const getInput = screen.getByTestId('get-input');
      const jsonDisplay = screen.queryByTestId('json-display');
      const submitButton = screen.getByTestId('go-button');
  
      let method = 'GET';
      let url = 'https://swapi.dev/api/people/1/';
  
      // 1 - if I type into the url and method fields, does the url display change?
      fireEvent.change(urlInput, {target: {value: url}});
    //   fireEvent.click(getInput, {target: {value: method}});
      fireEvent.click(submitButton);
  
      // does the json display show the results of the API call?
      expect(jsonDisplay).not.toBeNull();
    });
  
  });