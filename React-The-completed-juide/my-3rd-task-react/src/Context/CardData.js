import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";

const CardDataContext = createContext({
  info: {},
  cars: [""],
  testimonials: [""],
  onPurches: () => {},
});

export const CardData = (props) => {
  let arr = []; // main arr
  const dataReducer = (state, action) => {
    if (action.type === "update") {
      return {
        cars: action.cars,
        testimonials: action.testimonials,
      };
    } else if (action.type === "info") {
      return {
        info: action.info,
        cars: action.cars,
        testimonials: action.testimonials,
        onPurches: () => {},
      };
    } else {
      return {
        cars: ["0"],
      };
    }
  };

  const [data, dispatch] = useReducer(dataReducer, {
    type: "update",
    cars: [""],
    testimonials: [""],
  });
  // const [info,setInfo] =useState({});

  const purcheseVal = (value) => {
    arr[value.index] = value;
    // setInfo({
    //   ...value,
    // });
    // dispatch({
    //   type: "info",
    //   info: value,
    //   cars: data.cars,
    //   testimonials:data.testimonials,
    //   onPurches:() =>{}
    // });

    localStorage.setItem("dataCars", JSON.stringify(arr));
    console.log(value); //what we do
  };

  /* fetch api 1.0 version 

  // fetch("data.json")
  //     .then((respons) => {
  //       return respons.json();
  //     })
  //     .then((result) => {
  //       dispatch({
  //         type: "update",
  //         cars: result.cars,
  //         testimonials: result.testimonials,
  //       });
  //     })
  */

  const getCars = useCallback(async () => {
    const responce = await fetch("data.json");
    const result = await responce.json();

    dispatch({
      type: "update",
      cars: result.cars,
      testimonials: result.testimonials,
    });
  }, []);

  useEffect(() => {
    getCars();
  }, [getCars]);

  /*   VALIDE VALue  */

  return (
    <CardDataContext.Provider
      value={{
        info: {},
        cars: data.cars,
        testimonials: data.testimonials,
        onPurches: purcheseVal,
      }}
    >
      {props.children}
    </CardDataContext.Provider>
  );
};

export default CardDataContext;
