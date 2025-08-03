import { useEffect, useState } from "react";
import axios from "axios";

export const useTrad = (lang) => {
  const [trad, setTrad] = useState(null);
  
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    axios
      .get(`${API_URL}/api/traduction/${lang}`)
      .then((res) => setTrad(res.data))
      .catch((err) => console.error(err));
  }, [lang]);

  return trad;
};
