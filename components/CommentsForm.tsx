import { ReactNode, useCallback, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";

type CommentsFormProps = {
  children?: ReactNode;
  slug: string;
};

const CommentsForm = ({ slug }: CommentsFormProps) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl = useRef(null);
  const nameEl = useRef(null);
  const emailEl = useRef(null);
  const storeDataEl = useRef(null);

  const handleSubmit = useCallback(() => {}, []);

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">CommentsForm</h3>

      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          placeholder="Comment"
          name="comment"
          ref={commentEl}
          className="w-full rounded-lg bg-sky-50 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-sky-100"
        />
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4">
        <input
          placeholder="Name"
          name="name"
          type="text"
          className="w-full rounded-lg bg-sky-50 p-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-sky-100"
          ref={nameEl}
        />
        <input
          placeholder="Email"
          name="email"
          type="text"
          className="w-full rounded-lg bg-sky-50 p-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-sky-100"
          ref={emailEl}
        />
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are required!</p>
      )}
      <div className="mt-8">
        <button
          className="inline-flex cursor-pointer rounded-lg bg-cyan-600 py-3 px-8 text-lg text-white  transition duration-500 ease-out hover:-translate-y-1"
          type="button"
          onClick={handleSubmit}
        >
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default CommentsForm;
