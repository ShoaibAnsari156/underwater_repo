import axios from "axios";
import { useEffect, useState } from "react"

const Home = () => {
  const [fishData, setFishData] = useState([]);
  async function getData() {
    try {
      let response = await axios.get("http://localhost:3001/fishData")
      setFishData(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      {
        fishData.map((fish,idx) => (
          <div key={idx}>
            <img src={fish.image} alt="" />
            <p>{fish.name}</p>
            <p>{fish.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Home