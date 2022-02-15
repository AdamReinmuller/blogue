import { ReactNode } from "react";
import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";

type CommentsFormProps = {
  children?: ReactNode;
  slug: string;
};

type Inputs = {
  name: string;
  email: string;
  comment: string;
  saveUser: boolean;
};

const RequiredErrorMessage = ({ show }: { show: boolean }) => {
  if (!show) {
    return <span className="ml-1 select-none text-xs text-red-600">*</span>;
  }

  return (
    <span className="ml-1 select-none text-xs text-red-600">
      This field is required
    </span>
  );
};

const CommentsForm = ({ slug }: CommentsFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    if (data.saveUser) {
      localStorage.setItem("name", data.name);
      localStorage.setItem("email", data.email);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
    }

    
  };

  console.log(watch("saveUser"));

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">CommentsForm</h3>

      <form className="mb-4 grid grid-cols-1" onSubmit={handleSubmit(onSubmit)}>
        <RequiredErrorMessage show={!!errors.name} />
        <input
          {...register("name", { required: true })}
          placeholder="Name"
          type="text"
          // value={localStorage localStorage.getItem("name") ?? undefined}
          className="mb-4 w-full rounded-lg border bg-slate-200 p-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-sky-300"
        />

        <RequiredErrorMessage show={!!errors.email} />
        <input
          {...register("email", { required: true })}
          placeholder="Email"
          type="email"
          className="mb-4 w-full rounded-lg bg-slate-200 p-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-sky-300"
        />

        <RequiredErrorMessage show={!!errors.comment} />
        <textarea
          {...register("comment", { required: true })}
          placeholder="Comment"
          className="mb-4 w-full rounded-lg bg-slate-200 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-sky-300"
        />

        <div className="flex cursor-pointer items-center">
          <input
            {...register("saveUser")}
            type="checkbox"
            className="rounded-sm"
            id="saveUser"
          />
          <label
            htmlFor="saveUser"
            className="ml-2 cursor-pointer text-gray-500"
          >
            Save my email and name
          </label>
        </div>

        <button
          className="mt-8 inline-flex cursor-pointer justify-self-start rounded-lg bg-cyan-600 py-3 px-8 text-lg text-white  transition duration-500 ease-out hover:-translate-y-1"
          type="submit"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentsForm;
