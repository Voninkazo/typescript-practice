import {createContext, useReducer} from 'react';

export const initialValues = {
    rValue: true,
    turnOn: () => {},
    turnOff: () => {},
}

// Create context
const GlobalContext = createContext(initialValues);

type State = {
    rValue: boolean;
}

// type Action = {
//     type: string;
// }

// other examples
type Action = {
    type: "one" | "two";
}

// type Action = {type: "one"} | {type: "two"} | {type: "three"}

function reducer(state: State,action: Action) {
    switch(action.type) {
        case "one":
            return {rValue: true};

        case "two":
            return{rValue: false};

            default:
                return state;
    }
}

export default GlobalContext;

export const GlobalProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValues);


   return (
        <GlobalContext.Provider value={
            {
                rValue: state.rValue,
                turnOn: () => dispatch({type: "one"}),
                turnOff: () => dispatch({type: "two"})
        }
    }
        >
            {children}
        </GlobalContext.Provider>
   )
}