"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-2xl font-bold text-cyan-500">
        Something went wrong!
      </h2>

      <p className="mt-2 text-red-400">
        {error?.message}
      </p>

      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}