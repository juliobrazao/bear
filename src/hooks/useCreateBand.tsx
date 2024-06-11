import { useMutation, useQueryClient } from "@tanstack/react-query";
import BandService, { Band } from "../services/BandService";

export function useCreateBand() {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationKey: ["create-band"],
    mutationFn: (band: Partial<Band>) => BandService.createBand(band),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["read-bands"] }),
  });

  return {
    mutateAsync,
  };
}
