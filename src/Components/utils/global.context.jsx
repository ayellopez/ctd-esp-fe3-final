import { createContext, useMemo, useEffect, useReducer  } from "react";

export const initialState = {theme: "light", data: [], favorites: [], flag: true,}

export const ContextGlobal = createContext(undefined);

export const contextReducer = (state, action) => {
  switch (action.type) {
    case "addFav":
        if (state.favorites.find((fav) => fav.id === action.payload.id)) {
        return { ...state, error: "ya se agregó a favoritos anteriormente"};}
        return { ...state, favorites: [...state.favorites, action.payload]};

    case "changeTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
      
    default:
      return state;
}};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(contextReducer, initialState);

  const getDentists = async () => {
    try { 
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch({ type: 'FETCH_DATA', payload: data });
      } catch (error) {
        console.log(error);
      }
   }

   const getFavs = () => {
    const favs = localStorage.getItem('favoritesDentists');
    let favoritos = {}
    if (favs) {
      favoritos = JSON.parse(favs)
    }

    return favoritos
  }

  const providerValue = useMemo(() => {
    const changeTheme = () => {
      dispatch({ type: "changeTema" });
    };

    const addFav = ({ id, name, username }) => {

      dispatch({ type: "addFav", payload: { id, name, username } });

    };

    return { state, getDentists, getFavs, changeTheme, addFav, dispatch }
  }, [state]);

  useEffect(()=>{
    getDentists();
  },[])
  useEffect(()=>{
    getFavs();
  },[])
  
  return (
    <ContextGlobal.Provider value={{ providerValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};
