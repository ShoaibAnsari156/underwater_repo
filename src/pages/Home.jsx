import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [fishData, setFishData] = useState([]);
  async function getData() {
    try {
      let response = await axios.get("http://localhost:3000/fishData");
      setFishData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {fishData.map((fish, idx) => (
          <div
            key={idx} className="bg-white shadow-2xl rounded-2xl p-4"
          >
            <img src={fish.image} alt="" className="w-full h-[500px] overflow-hidden"/>
            <p className="text-2xl font-semibold">{fish.name}</p>
            <p>{fish.description}</p>
          </div>
      ))}
    </div>
  );
};

export default Home;