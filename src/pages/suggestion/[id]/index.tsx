import { useState, useEffect } from "react";
import { Menu, X, User, ChevronDown } from "lucide-react";
import { Bussineses, Category, Department } from "@/types/type";
import { categories } from "@/types/schema/post-form";
import { useRouter } from "next/router";
import { departments, samplePosts, users } from "@/utils/mock";

export default function SuggestionDepartment() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [selectedUser, setSelectedUser] = useState<number | null>(null)
  const [selectedDepartment, setSelectedDepartment] = useState<Department | "">(
    ""
  );
  const [selectedBusiness, setSelectedBusiness] = useState<Bussineses | "">("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("良い点");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const router = useRouter();

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDepartment(e.target.value as Department);
    setSelectedBusiness("");
    router.push(`/suggestion/${e.target.value}`);
  };

  const handleBusinessChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBusiness(e.target.value as Bussineses);
  };

  const filteredPosts = samplePosts.filter(
    (post) =>
      // (!selectedUser || post.userId === selectedUser) &&
      (!selectedDepartment || post.department === selectedDepartment) &&
      (!selectedBusiness || post.business === selectedBusiness) &&
      post.category === selectedCategory
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* サイドバー */}
      <aside
        className={`bg-white w-64 shadow-md fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition duration-200 ease-in-out z-30`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">ユーザー一覧</h2>
          <button onClick={toggleSidebar} className="md:hidden">
            <X size={24} />
          </button>
        </div>
        <nav>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <button
                  // onClick={() => setSelectedUser(user.id === selectedUser ? null : user.id)}
                  // className={`flex items-center w-full p-4 hover:bg-gray-100 ${selectedUser === user.id ? 'bg-blue-100' : ''}`}
                  className={`flex items-center w-full p-4 hover:bg-gray-100`}
                >
                  <User size={20} className="mr-2" />
                  {user.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* メインコンテンツ */}
      <main className="flex-1 overflow-y-auto">
        {/* ハンバーガーメニュー（モバイル） */}
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-40 md:hidden bg-white p-2 rounded-md shadow-md"
          aria-label="メニューを開く"
        >
          <Menu size={24} />
        </button>

        <div className="max-w-4xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-6">投稿一覧</h1>

          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <select
                value={selectedDepartment}
                onChange={handleDepartmentChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                {Object.keys(departments).map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={20}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
            <div className="relative">
              <select
                value={selectedBusiness}
                onChange={handleBusinessChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                disabled={!selectedDepartment}
              >
                <option value="">事業内容を選択</option>
                {selectedDepartment &&
                  departments[selectedDepartment].map((biz) => (
                    <option key={biz} value={biz}>
                      {biz}
                    </option>
                  ))}
              </select>
              <ChevronDown
                size={20}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          <div className="mb-6">
            <nav className="flex space-x-1" aria-label="Tabs">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-1 px-3 py-2 text-sm font-medium rounded-md ${
                    selectedCategory === category
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">
                    {users.find((u) => u.id === post.userId)?.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {post.timestamp}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  {post.department} - {post.business}
                </div>
                <p className="text-gray-700">{post.content}</p>
              </div>
            ))}
            {filteredPosts.length === 0 && (
              <p className="text-center text-gray-500">
                該当する投稿がありません。
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
