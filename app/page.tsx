import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center mb-4">
        Halaman Utama
      </h1>
      <p className="text-sm md:text-lg text-center mb-6">
        Selamat datang di website saya
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
        <Link href="/posts">
          <a className="text-blue-500 hover:underline text-center">POSTING PAGE</a>
        </Link>
        <Link href="/albums">
          <a className="text-blue-500 hover:underline text-center">ALBUM PAGE</a>
        </Link>
      </div>
    </div>
  );
}
