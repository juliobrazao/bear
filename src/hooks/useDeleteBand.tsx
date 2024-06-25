import { useMutation, useQueryClient } from "@tanstack/react-query";
import BandService from "../services/BandService";

export function useDeleteBand() {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationKey: ["delete-band"],
    mutationFn: async (bandId: string) => BandService.deleteBand(bandId),
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
