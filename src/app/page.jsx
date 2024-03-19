"use client";
import { use, useState } from "react";

import DataFetcher from "./components/fetch";
import FoodSearchBar from "./components/form";
import FoodCard from "./components/foodCards";

export default function Home({ searchParams }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [v, setV] = useState("v1");
  const [data, setData] = useState([]);
  return (
    <div>
      <FoodSearchBar />
      <DataFetcher
        data={data}
        setData={setData}
        setError={setError}
        error={error}
        isLoading={isLoading}
        v={v}
        searchParams={searchParams}
        setIsLoading={setIsLoading}
      />
      <FoodCard data={data} error={error} isLoading={isLoading} />
    </div>
  );
}
