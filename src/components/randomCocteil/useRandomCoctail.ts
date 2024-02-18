import { useState, useEffect } from "react";
import { getRandomCoctail } from "../../api";
import {CoctailResponse} from "./types";

export const useRandomCoctail = () => {
  const [randomCoctail, setRandomCoctail] = useState<CoctailResponse | null>(null);

  useEffect(() => {
    const fetchRandomCoctail = async () => {
      try {
        const response = await getRandomCoctail();
        setRandomCoctail(response.data);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchRandomCoctail();
    return () => {};
  }, []);

  return { randomCoctail, setRandomCoctail };
};
