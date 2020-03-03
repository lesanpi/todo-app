import React, {createContext, useContext, useReducer} from 'react';
import {saveState, loadState} from './local-storage';
import {format} from 'date-fns';
import {View} from 'react-native';
export const AppContext = createContext();

export function useAppState() {
  return useContext(AppContext)[0];
}

export function useAppReducer() {
  return useContext(AppContext)[1];
}

export function useItems() {
  const {items} = useAppState();

  const pending = items.filter(item => item.status === 'pending');
  const paused = items.filter(item => item.status === 'paused');
  const completed = items.filter(item => item.status === 'completed');

  return {pending, paused, completed};
}

const appStateReducer = (state, action) => {
  let date = new Date();

  let currentDate = {
    day: format(date, 'd'),
    dayDisplay: format(date, 'd'),
    month: format(date, 'MM'),
    monthDisplay: format(date, 'MMM'),
    year: format(date, 'y'),
    weekday: format(date, 'EEEE'),
  };

  switch (action.type) {
    case 'ADD_ITEM': {
      const newState = {...state, items: state.items.concat(action.item)};
      saveState(newState);
      return newState;
    }
    case 'UPDATE_ITEM': {
      const newItems = state.items.map(i => {
        if (i.key === action.item.key) {
          return Object.assign({}, i, {
            status: action.item.status,
          });
        }
        return i;
      });
      const newState = {...state, items: newItems};
      saveState(newState);
      return newState;
    }
    case 'DELETE_ITEM': {
      const newState = {
        ...state,
        items: state.items.filter(item => item.key !== action.item.key),
      };
      saveState(newState);
      return newState;
    }
    case 'RESET_ALL': {
      const newItems = state.items
        .filter(item => item.status !== 'completed')
        .map(i => {
          if (i.status === 'paused') {
            return Object.assign({}, i, {
              status: 'pending',
            });
          }
          return i;
        });
      const newState = {...state, items: newItems, date: currentDate};
      saveState(newState);
      return newState;
    }
    default:
      return state;
  }
};

export function AppStateProvider({children}) {
  let initialState = loadState();

  if (initialState === undefined) {
    let date = new Date();
    initialState = {
      items: [],
      date: {
        day: format(date, 'd'),
        dayDisplay: format(date, 'd'),
        month: format(date, 'MM'),
        monthDisplay: format(date, 'MMM'),
        year: format(date, 'y'),
        weekday: format(date, 'EEEE'),
      },
    };
  }

  saveState(initialState);

  const value = useReducer(appStateReducer, initialState);

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}
