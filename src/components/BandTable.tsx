import { Spinner } from "react-bootstrap";
import { useReadBands } from "../hooks/useReadBands";
import { Band } from "../services/BandService";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Pencil, Trash } from "react-bootstrap-icons";
import { useDeleteBand } from "../hooks/useDeleteBand";

export default function BandTable() {
  const { t } = useTranslation();
  const { data: bands, isLoading, isRefetching, refetch } = useReadBands();
  const { mutateAsync: deleteBand } = useDeleteBand();

  useEffect(() => {
    refetch();
  }, [bands, refetch]);

  if (isLoading)
    return (
      <>
        <Spinner size="sm" />
        &nbsp; {t("main.loading.loading")}
      </>
    );

  if (isRefetching)
    return (
      <>
        <Spinner size="sm" />
        &nbsp; {t("main.loading.updating")}
      </>
    );

  return (
    <>
      <div className="table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>{t("table.id")}</th>
              <th>{t("table.name")}</th>
              <th>{t("table.owner")}</th>
              <th>{t("table.end_of_contract")}</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bands?.map(
              (
                { id, name, owner, endOfContract }: Partial<Band>,
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
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => id && deleteBand(id)}
                    >
                      <Trash />
                    </button>

                    <button className="btn btn-info mx-3">
                      <Pencil />
                    </button>
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
