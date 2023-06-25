import Link from "next/link"
import { FirstPostCard, PostCard } from "./post-card"

const postDatas = [
  {
    authorName: "Mèo cắt moi",
    authorImgSrc:
      "https://m.media-amazon.com/images/I/51y8GUVKJoL._AC_UF894,1000_QL80_.jpg",
    postDate: "18 tháng 6",
    postTitle:
      "Array and Object Methods: JavaScript's Toolkit or Circus Tricks?",
    postImgSrc:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--ANxGMqua--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7p2v0k5d16ekr5oncpxr.png",
    postTopic: "#server",
    postReaction: 3,
    postComment: 10,
  },
  {
    authorName: "Code Craft",
    authorImgSrc:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--2EehvO7i--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1083239/38d63e5e-e798-4d3e-b872-e388587b421b.png",
    postDate: "20 tháng 6",
    postTitle: "Tổng hợp những câu hỏi Interview về Javascript",
    postImgSrc:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--Ru_sh7cK--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/23wprhpjjz7qje3cs5j1.png",
    postTopic: "#javascript",
    postReaction: 20,
    postComment: 45,
  },
  {
    authorName: "Mèo cắt moi",
    authorImgSrc:
      "https://m.media-amazon.com/images/I/51y8GUVKJoL._AC_UF894,1000_QL80_.jpg",
    postDate: "21 tháng 6",
    postTitle: "A-Z: MongoDB Cheat Sheet",
    postImgSrc:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--Ru_sh7cK--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/23wprhpjjz7qje3cs5j1.png",
    postTopic: "#database",
    postReaction: 40,
    postComment: 50,
  },
  {
    authorName: "Mèo cắt moi",
    authorImgSrc:
      "https://m.media-amazon.com/images/I/51y8GUVKJoL._AC_UF894,1000_QL80_.jpg",
    postDate: "18 tháng 6",
    postTitle: 'Làm cách nào để có thể viết "Clean Code"',
    postImgSrc:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--Ru_sh7cK--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/23wprhpjjz7qje3cs5j1.png",
    postTopic: "#coding",
    postReaction: 50,
    postComment: 100,
  },
]

export default function Content() {
  return (
    <main className="flex flex-col gap-4 w-full max-w-[55%] px-4">
      {/* cục filter */}
      <div className="flex gap-4 w-full">
        <Link
          href={"/"}
          className="text-gray-700 px-5 py-2 rounded-lg transition-all ease-in font-semibold
          hover:bg-white hover:font-semibold
          "
        >
          Tất cả
        </Link>
        <Link
          href={"/"}
          className="text-gray-700 px-5 py-2 rounded-lg transition-all ease-in
          hover:bg-white hover:font-semibold
          "
        >
          Bài viết
        </Link>
        <Link
          href={"/"}
          className="text-gray-700 px-5 py-2 rounded-lg transition-all ease-in
          hover:bg-white hover:font-semibold
          "
        >
          Podcast
        </Link>
      </div>
      {postDatas.map((post, index) =>
        index === 0 ? (
          <FirstPostCard
            key={post.postTitle}
            postImgSrc={post.postImgSrc}
            authorImgSrc={post.authorImgSrc}
            authorName={post.authorName}
            postDate={post.postDate}
            postTitle={post.postTitle}
            postComment={post.postComment}
            postReaction={post.postReaction}
            postTopic={post.postTopic}
          />
        ) : (
          <PostCard
            key={post.postTitle}
            authorImgSrc={post.authorImgSrc}
            authorName={post.authorName}
            postDate={post.postDate}
            postTitle={post.postTitle}
            postComment={post.postComment}
            postReaction={post.postReaction}
            postTopic={post.postTopic}
          />
        )
      )}
    </main>
  )
}
