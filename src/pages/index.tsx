import { Send, Paperclip } from "lucide-react";
import { Post } from "@/types/type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categories, postSchema } from "@/types/schema/post-form";
import { departments } from "@/utils/mock";

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Post>({ resolver: zodResolver(postSchema) });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // ここに画像アップロードのロジックを実装します
      console.log("画像がアップロードされました:", file.name);
    }
  };

  const selectedDepartment = watch("department");

  const onSubmit = (data: Post) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          お手伝いできることはありますか？
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="file"
            id="imageUpload"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <div className="grid grid-cols-3 gap-4">
            <select
              {...register("department")}
              className="w-full px-4 py-2 text-sm bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">部署を選択</option>
              {Object.keys(departments).map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <select
              {...register("businesses")}
              className="w-full px-4 py-2 text-sm bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!selectedDepartment}
            >
              <option value="">事業内容を選択</option>
              {selectedDepartment &&
                departments[selectedDepartment].map((business) => (
                  <option key={business} value={business}>
                    {business}
                  </option>
                ))}
            </select>
            <select
              {...register("categories")}
              className="w-full px-4 py-2 text-sm bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">カテゴリーを選択</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="relative">
            <textarea
              {...register("content", { required: "必須項目です" })}
              className="w-full p-4 pr-24 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px] resize-none"
              placeholder="メッセージを入力してください"
            />
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">
                {errors.content?.message}
              </p>
            )}
            <button
              type="button"
              className="absolute right-14 bottom-3 text-gray-500 hover:text-gray-700 bg-white p-2 rounded-full"
              aria-label="画像を添付"
              onClick={() => document.getElementById("imageUpload")?.click()}
            >
              <Paperclip size={24} />
            </button>
            <button
              type="submit"
              className="absolute right-3 bottom-3 text-blue-500 hover:text-blue-600 bg-white p-2 rounded-full"
              aria-label="送信"
            >
              <Send size={24} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
