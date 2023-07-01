import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState
} from "react";

const CardDataContext = createContext({
  info: {},
  cars: [""],
  testimonials: [""],
  onPurches: () => { },
  array: () => { }
});

export const CardData = (props) => {
  let arr = [
{ value: 0, index: 0, name: 'Porsche 911', class: 'Sports Car', image: '/images/porsche-911-1.png' }
,
{ value: 0, index: 1, name: 'BMW 7 Series', class: 'Luxury Car', image: '/images/bmw-7-series.png' }
,
{ value: 0, index: 2, name: 'Range Rover Sport', class: 'SUV', image: '/images/range-rover-sport.png' }
,
{ value: 0, index: 3, name: 'Mercedes-Benz S-Class', class: 'Luxury Car', image: '/images/mercedes-benz-s-class.png' }
,
{ value: 0, index: 4, name: 'Tesla Model S', class: 'Electric Car', image: '/images/tesla-model-s.png' }
,
{ value: 0, index: 5, name: 'Bentley Bentayga', class: 'Luxury SUV', image: '/images/bentley-bentayga.png' }
  ]; // main arr
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
        onPurches: () => { },
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
  const [info, setInfo] = useState({});

  const purcheseVal = () => {
    setInfo({ true: 'true' });
  };
  const saveLocalStorage = (value) => {
    arr[value.index].value = value.value ;
    console.log('changed');
    localStorage.setItem('dataCars', JSON.stringify(arr));
    
  }
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
        array: saveLocalStorage
      }}
    >
      {props.children}
    </CardDataContext.Provider>
  );
};

export default CardDataContext;
