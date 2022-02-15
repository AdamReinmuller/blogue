export * from "./types";

export const submitComment = async (obj: unknown) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify(obj),
  });

  return result.json();
};
