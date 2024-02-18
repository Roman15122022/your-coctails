import {useRandomCoctail} from "./useRandomCoctail";

export const RandomCocteil = () => {
  const {randomCoctail, setRandomCoctail} = useRandomCoctail()
  console.log(randomCoctail)

  if (randomCoctail === null){
    return (
      <div className="mt-5 font-medium animate-bounce">Loading...</div>
    )
  }

  return (
    <div className="mt-16">
      <h1>Coctail name: {randomCoctail.drinks[0].strDrink}</h1>
      <div className="w-72 h-72">
        <img src={randomCoctail.drinks[0].strDrinkThumb} alt=""/>
      </div>
    </div>
  );
};

export default RandomCocteil;
