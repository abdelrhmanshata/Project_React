import { createContext } from "react";

const ProductsContext = createContext();

export default ProductsContext;

// Create context
// Wrap component <Context.Provider value={{ state, setState  }}>
// To read context value => const { state, setState } = useContext(Context)