import { FaStar } from "react-icons/fa6";
export default function Rating({ rating }) {
  return (
    <>
      <div className="d-flex">
        <FaStar style={{ color: rating >= 1 ? "gold" : "gray" }} />
        <FaStar style={{ color: rating >= 2 ? "gold" : "gray" }} />
        <FaStar style={{ color: rating >= 3 ? "gold" : "gray" }} />
        <FaStar style={{ color: rating >= 4 ? "gold" : "gray" }} />
        <FaStar style={{ color: rating >= 5 ? "gold" : "gray" }} />
      </div>
    </>
  );
}
