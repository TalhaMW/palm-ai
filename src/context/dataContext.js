import { createContext } from 'react';
import { useReducer } from 'react';

export const DataContext = createContext();

const dataReducer = (state, action) => {
  if (action.type === 'DATA') {
    return [...state, action.payload];
  }
  return state;
};

const DataContextProvider = ({ children }) => {
  const initialState = {
    data: [],
    outcomerequird: {
      'Housing transactions - monthly by postcode': [
        'Housing data1',
        'Housing data 2',
      ],
      'Competitor performance mapping': [
        'competitor data1',
        'competitor data 2',
      ],
    },
  };

  const [state, dispatch] = useReducer(dataReducer, initialState);

  const dataAction = (data) => dispatch({ type: 'DATA', payload: data });

  return (
    <DataContext.Provider value={{ data: state.data, dataAction }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
