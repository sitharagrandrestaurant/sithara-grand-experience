import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-background p-6 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="font-display text-5xl">This table is not available.</h1>
        <Link to="/" className="mt-6 inline-block text-primary">
          Return home
        </Link>
      </div>
    </div>
  );
}
