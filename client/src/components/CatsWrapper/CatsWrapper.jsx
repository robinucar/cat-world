import { useState, useEffect } from "react";
import axios from "axios";
import "./CatsWrapper.scss";
import Cats from "./Cats/Cats";
import Header from "../Header/Header";

const CatsWrapper = () => {
  const [cats, setCats] = useState([]);
  const [query, setQuery] = useState("");
  const searchCat = (breeds) => {
    return breeds.filter(
      (breed) => breed.name.toLowerCase().indexOf(query) > -1
    );
  };
  useEffect(() => {
    // connect data
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/v1/breeds");
        setCats(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <input
        className="search"
        placeholder="Search by breed  name..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Cats cats={searchCat(cats)} />
    </div>
  );
};

export default CatsWrapper;
