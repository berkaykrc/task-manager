import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "react-native-elements";

function AuthScreen() {
  const { register, handleSubmit, setValue } = useForm();

  React.useEffect(() => {
    register("email");
    register("password");
  }, [register]);

  const onSubmit = (data) => {
    console.log(data);
    // Here you can handle the form submission.
    // This might involve sending a request to your backend service.
  };

  return (
    <>
      <Input
        placeholder="Email"
        onChangeText={(text) => setValue("email", text)}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setValue("password", text)}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </>
  );
}

export { AuthScreen };
