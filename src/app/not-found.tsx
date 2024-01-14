import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-gray-900">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-green-600 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
      <Link className="font-medium text-green-600 border-green-600 border-2 px-7 py-4 hover:border-green-500 hover:text-green-500 rounded-sm " href="/">Go Home</Link>
      </button>
    </main>
  );
};

export default NotFoundPage;
