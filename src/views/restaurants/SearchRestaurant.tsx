import { useEffect, useState } from "react";
import type { RestaurantSearchFilter } from "../../domain/restaurant";
import { useDebounce } from "../../use-cases/common/useDebounce";

type Props = {
  onChange: (filter: RestaurantSearchFilter) => void;
};

const SearchRestaurant = ({ onChange }: Props) => {
  const [name, setName] = useState<RestaurantSearchFilter["name"]>("");
  const debouncedName = useDebounce(name);

  useEffect(() => {
    onChange({ name: debouncedName });
  }, [debouncedName]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search products"
      />
    </div>
  );
};

export default SearchRestaurant;
