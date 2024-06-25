import { useMutation, useQueryClient } from "@tanstack/react-query";
import BandService, { Band } from "../services/BandService";

export function useUpdateBand() {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationKey: ["edit-band"],
    mutationFn: async ({
      bandId,
      band,
    }: {
      bandId: string;
      band: Partial<Band>;
    }) => {
      return BandService.updateBand(bandId, band);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["read-bands"],
      });
    },
  });

  return {
    mutateAsync,
  };
}
