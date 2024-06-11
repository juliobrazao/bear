import { useQuery } from "@tanstack/react-query";
import BandService from "../services/BandService";

export function useReadBands() {
  const { data, isLoading, isRefetching, refetch } = useQuery({
    queryKey: ["read-bands"],
    queryFn: () => {
      return BandService.readBands();
    },
  });

  return {
    data,
    isLoading,
    isRefetching,
    refetch,
  };
}
