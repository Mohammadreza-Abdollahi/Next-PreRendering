"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <section className="px-3">
      <button
        onClick={() => router.back()}
        className="w-full block py-3 text-lg rounded-md bg-blue-600 text-white hover:text-blue-600 hover:border-1 hover:border-blue-600 hover:bg-white transition-all duration-150"
      >
        Back
      </button>
    </section>
  );
};

export default BackButton;
