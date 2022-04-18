import { useEffect, useState } from "react";

function useSave() {
  const [fav, setFav] = useState([]);
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("fav"));
    favs ? setFav(favs) : setFav([]);
  }, []);

  const save = (id) => {
    try {
      const f = JSON.parse(localStorage.getItem("fav")) || [];
      if (f.includes(+id)) {
        // Remove item
        const ind = f.findIndex((e) => e === +id);
        f.splice(ind, 1);
        localStorage.setItem("fav", JSON.stringify(f));
        setFav(f);
        return;
      }
      // Add item to local storage
      f.push(+id);
      localStorage.setItem("fav", JSON.stringify(f));
      setFav(f);
    } catch (error) {
      console.error(error.message);
    }
  };

  return { save, fav };
}

export default useSave;
