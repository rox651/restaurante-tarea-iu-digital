import { useRouter } from "@tanstack/react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { Restaurant } from "../../domain/restaurant";
import { Input, InputError } from "../../components/common/input";

type Props = {
  handleSetNewRestaurant: (restaurant: Restaurant) => void;
};

const CreateNewRestaurantForm = ({ handleSetNewRestaurant }: Props) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Restaurant>();

  const onSubmit: SubmitHandler<Restaurant> = (data) => {
    handleSetNewRestaurant(data);

    router.navigate({ to: "/" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          {...register("name", { required: true })}
          placeholder="Nombre del restaurante"
          className="w-full"
        />
        {errors.name && <InputError message="Este campo es requerido" />}
      </div>

      <div>
        <Input
          {...register("address", { required: true })}
          placeholder="Dirección del restaurante"
          className="w-full"
        />
        {errors.address && <InputError message="Este campo es requerido" />}
      </div>

      <div>
        <Input
          {...register("description", { required: true })}
          placeholder="Descripción del restaurante"
          className="w-full"
        />
        {errors.description && <InputError message="Este campo es requerido" />}
      </div>

      <div>
        <Input
          type="url"
          pattern="https://.*"
          placeholder="Imagen del restaurante"
          {...register("imageURL", { required: true })}
          className="w-full"
        />
        {errors.imageURL && <InputError message="Este campo es requerido" />}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
      >
        Crear Restaurante
      </button>
    </form>
  );
};

export default CreateNewRestaurantForm;
