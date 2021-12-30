import React, { useEffect, useState } from "react";
import "./styles.css";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const apiURL = "https://course-api.com/react-tours-project";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newToursLeft = tours.filter((tour) => tour.id !== id);
    setTours(newToursLeft);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(apiURL);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}
