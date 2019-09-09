import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApiResults = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Brooklyn"
        }
      });
      setResults(response.data.businesses);
      setErrorMessage(null);
    } catch (e) {
      setErrorMessage("Something went wrong try again later");
    }
  };
  // ComponenentDidMount function
  useEffect(() => {
    searchApiResults("pasta");
  }, []);
  return [searchApiResults, results, errorMessage];
};
