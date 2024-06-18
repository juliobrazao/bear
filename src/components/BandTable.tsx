import { Spinner } from "react-bootstrap";
import { useReadBands } from "../hooks/useReadBands";
import { Band } from "../services/BandService";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function BandTable() {
  const { t } = useTranslation();
  const { data: bands, isLoading, isRefetching, refetch } = useReadBands();

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
