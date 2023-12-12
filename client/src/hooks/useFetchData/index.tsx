import axios from "axios";
import { useState, useEffect } from "react";
import { ResponseData } from "../../types";

export default function useFetchData() {
  const [data, setData] = useState<object>({});
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8080");
        const responseData = response.data;
        setData(responseData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return {
    data,
    error,
    loading,
  } as ResponseData;
}
