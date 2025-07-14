import { useEffect, useState } from "react";
import axios from "axios";

export const useTrad = (lang) => {
  const [trad, setTrad] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:4000/translations?lang=${lang}`)
      .then(res => setTrad(res.data))
      .catch(err => console.error(err));
  }, [lang]);
  return trad;
};