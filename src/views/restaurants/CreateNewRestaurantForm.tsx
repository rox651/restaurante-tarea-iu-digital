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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("name")} placeholder="Nombre del restaurante" />
      {errors.name && <InputError message="Este campo es requerido" />}

      <Input
        {...register("address")}
        placeholder="Dirreccion del restaurante"
      />
      {errors.address && <InputError message="Este campo es requerido" />}

      <Input
        {...register("description")}
        placeholder="Descripcion del restaurante"
      />
      {errors.description && <InputError message="Este campo es requerido" />}

      <Input
        type="url"
        pattern="https://.*"
        placeholder="Nombre del restaurante"
        {...register("imageURL")}
      />
      {errors.imageURL && <InputError message="Este campo es requerido" />}

      <button>Crear restaurante</button>
    </form>
  );
};

export default CreateNewRestaurantForm;
