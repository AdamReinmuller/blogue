import { ReactNode } from "react";

type CommentsProps = {
  children?: ReactNode;
};

const Comments = ({}: CommentsProps) => {
  return (
    <div>
      <h1>Comments</h1>
    </div>
  );
};

export default Comments;
