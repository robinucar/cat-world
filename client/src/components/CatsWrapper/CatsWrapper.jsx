import { useState, useEffect } from 'react';
import axios from 'axios';
import './CatsWrapper.scss'
import Cats from './Cats/Cats';


const CatsWrapper = () => {
    const [cats, setCats] = useState([]);
  useEffect(() => {
    // connect data
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/v1/breeds");
      setCats(res.data);
      console.log(res.data)
      } catch (error) {
        console.error(error)
      }
      
    };
    fetchData();
  }, []);
  return (
    <div>
      <Cats cats={cats}/>
    </div>
  )
}

export default CatsWrapper