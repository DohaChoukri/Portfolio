import { useEffect, useState } from "react";
import axios from "axios";

export const useTrad = (lang) => {
  const [trad, setTrad] = useState(null);
  useEffect(() => {
    // axios.get(`${import.meta.env.VITE_API_URL}/api/traduction/${lang}`)
    axios.get('http://localhost:5000/api/traduction/' + lang)
      .then(res => setTrad(res.data))
      .catch(err => console.error(err));
  }, [lang]);
  return trad;
};