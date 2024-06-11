import { Spinner } from "react-bootstrap";
import { useReadBands } from "../hooks/useReadBands";
import { Band } from "../services/BandService";
import { useEffect } from "react";

export default function BandTable() {
  const { data: bands, isLoading, isRefetching, refetch } = useReadBands();

  useEffect(() => {
    refetch();
  }, [bands, refetch]);

  if (isLoading)
    return (
      <>
        <Spinner size="sm" />
        &nbsp; Loading
      </>
    );

  if (isRefetching)
    return (
      <>
        <Spinner size="sm" />
        &nbsp; Updating
      </>
    );

  return (
    <>
      <div className="table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Owner</th>
              <th>End of Contract</th>
            </tr>
          </thead>
          <tbody>
            {bands?.map(
              (
                { name, owner, endOfContract }: Partial<Band>,
                index: number
              ) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{owner}</td>
                  <td>
                    {
                      new Date(Number(endOfContract))
                        .toISOString()
                        .split("T")[0]
                    }
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
