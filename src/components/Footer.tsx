import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-white py-4 text-center text-xs text-gray-500">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-x-2 sm:space-x-4 flex flex-wrap justify-center">
          <Link href="#" className="hover:underline">
            Meyasubako
          </Link>
          <Link href="#" className="hover:underline">
            基本データ
          </Link>
          <Link href="#" className="hover:underline">
            ブログ
          </Link>
          <Link href="#" className="hover:underline">
            求人
          </Link>
          <Link href="#" className="hover:underline">
            ヘルプ
          </Link>
          <Link href="#" className="hover:underline">
            API
          </Link>
          <Link href="#" className="hover:underline">
            プライバシー
          </Link>
          <Link href="#" className="hover:underline">
            利用規約
          </Link>
          <Link href="#" className="hover:underline">
            所在地
          </Link>
          <Link href="#" className="hover:underline">
            連絡先のアップロードとユーザー以外
          </Link>
        </nav>
        <div className="mt-2 sm:mt-4">
          <select className="text-xs text-gray-500 bg-transparent">
            <option>日本語</option>
          </select>
          <span className="ml-2 sm:ml-4">© 2024</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
