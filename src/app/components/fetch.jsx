import { useEffect, useState } from "react";
function DataFetcher({
  error,
  isLoading,
  v,
  data,
  setData,
  searchParams,

  setIsLoading,
  setError,
}) {
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      const queryParam = searchParams?.search
        ? `?search=${encodeURIComponent(searchParams.search)}`
        : "";
      const url = `http://localhost:3000/api/${v}/${searchParams.country}${queryParam}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();

        if (Array.isArray(jsonData.data)) {
          setData(jsonData.data);
        } else {
          throw new Error("Data is not an array");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [v, searchParams]);

  return <div></div>;
}

export default DataFetcher;
