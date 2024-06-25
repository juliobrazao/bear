import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateBand } from "../hooks/useCreateBand";
import { useDialogStore } from "../store/dialog";
import { Band } from "../services/BandService";
import { useTranslation } from "react-i18next";
import { useTransition } from "react";
import { Spinner } from "react-bootstrap";

const BandFormSchema = z.object({
  name: z.string().min(1).max(30),
  owner: z.string().min(1).max(30),
});

export default function BandForm() {
  const [isPending, startTransition] = useTransition();
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<Band>({
    resolver: zodResolver(BandFormSchema),
  });

  const { mutateAsync } = useCreateBand();

  const { show, setShow } = useDialogStore();

  const handleSubmitForm = (data: Band) => {
    mutateAsync(data);
    reset();
    setShow(!show);
  };

  if (isPending)
    return (
      <>
        <Spinner size="sm" />
      </>
    );

  return (
    <>
      <div className="container-fluid">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              {t("dialog.name")}
            </label>
            <input
              type="text"
              className="form-control"
              {...register("name")}
              id="name"
            />
            {errors && (
              <small className="form-text text-danger">
                {errors?.name?.message}
              </small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="owner" className="form-label">
              {t("dialog.owner")}
            </label>
            <input
              type="text"
              className="form-control"
              {...register("owner")}
              id="owner"
            />
            {errors && (
              <small className="form-text text-danger">
                {errors?.owner?.message}
              </small>
            )}
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100">
              {t("dialog.save")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
