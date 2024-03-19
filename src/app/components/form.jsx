import { redirect, useRouter } from "next/navigation";
import { countries } from "../states/countries";

function FoodSearchBar({ country }) {
  const router = useRouter();
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {};

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const entries = Array.from(data.entries());
    const query = new URLSearchParams(entries);

    router.push(`?${query}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg bg-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="search"
          placeholder="Search for food..."
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-300 ease-in-out transform hover:-translate-y-1"
        />
        <select
          value={country}
          name="country"
          onChange={handleFilterChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-300 ease-in-out"
        >
          {countries.map((country, index) => (
            <option value={country.toLowerCase()} key={index}>
              {country}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transform hover:-translate-y-1 transition duration-300 ease-in-out"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default FoodSearchBar;
