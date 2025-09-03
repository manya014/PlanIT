import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../lib/api";
import { useNavigate } from "react-router-dom";  // ✅ correct import

const useSignUp = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate(); // ✅ hook gives us navigate function

  const { mutate, isPending, error } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      navigate("/login"); // ✅ this will redirect
    },
  });

  return { isPending, error, signupMutation: mutate };
};

export default useSignUp;
