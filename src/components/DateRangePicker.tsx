import "react-datetime/css/react-datetime.css";
import DateTime from "react-datetime";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

export default function DateRangePicker() {
  const { t } = useTranslation();

  const [startDate] = useState<any>(moment().subtract(1, "week"));
  const [endDate] = useState<any>(moment());

  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  const monthNames = {
    months: [
      t("utils.months.january"),
      t("utils.months.february"),
      t("utils.months.march"),
      t("utils.months.april"),
      t("utils.months.may"),
      t("utils.months.june"),
      t("utils.months.july"),
      t("utils.months.august"),
      t("utils.months.september"),
      t("utils.months.october"),
      t("utils.months.november"),
      t("utils.months.december"),
    ],
    monthsShort: [
      t("utils.months.january").slice(0, 3),
      t("utils.months.february").slice(0, 3),
      t("utils.months.march").slice(0, 3),
      t("utils.months.april").slice(0, 3),
      t("utils.months.may").slice(0, 3),
      t("utils.months.june").slice(0, 3),
      t("utils.months.july").slice(0, 3),
      t("utils.months.august").slice(0, 3),
      t("utils.months.september").slice(0, 3),
      t("utils.months.october").slice(0, 3),
      t("utils.months.november").slice(0, 3),
      t("utils.months.december").slice(0, 3),
    ],
  };

  useEffect(() => {
    if (startDateRef && endDateRef) {
      console.log({
        startDateRef: startDateRef?.current,
        endDateRef: endDateRef?.current,
      });
    }
  }, [startDateRef.current]);

  moment.defineLocale("custom", monthNames);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="row">
          <div className="col-sm-6">
            <DateTime
              ref={startDateRef}
              initialValue={startDate}
              inputProps={{
                className: "p-3 text-center w-100",
                style: { borderRadius: "3rem", border: "2px solid #000" },
              }}
              locale="custom"
              dateFormat={t("utils.dateformat")}
              timeFormat={false}
            />
          </div>

          <div className="col-sm-6">
            <DateTime
              ref={endDateRef}
              initialValue={endDate}
              inputProps={{
                className: "p-3 text-center w-100",
                style: { borderRadius: "3rem", border: "2px solid #000" },
              }}
              locale="custom"
              dateFormat={t("utils.dateformat")}
              timeFormat={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
