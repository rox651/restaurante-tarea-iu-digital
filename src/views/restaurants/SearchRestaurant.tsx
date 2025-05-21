import { useEffect, useState } from "react";
import type { RestaurantSearchFilter } from "../../domain/restaurant";
import { useDebounce } from "../../use-cases/common/useDebounce";
import { Input } from "../../components/common/input";

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
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Buscar restaurante por nombre"
        className="mb-5 border-2 rounded-full px-3 lg:w-1/2 mx-auto"
      />
    </div>
  );
};

export default SearchRestaurant;
