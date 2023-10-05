import { FC } from "react";

const FeedbacksCount: FC<{ count?: number }> = ({ count }) => {
  return <span className="text-sm text-gray-500">{count}</span>;
};

export default FeedbacksCount;
