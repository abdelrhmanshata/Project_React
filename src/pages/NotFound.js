import notFound from "../images/notFound.png";
export default function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-3">
      <h1 className="mt-5 text-primary">Not Found Page</h1>
      <img src={notFound} alt="404 Not Found" width="500px" height="500px" />
    </div>
  );
}
