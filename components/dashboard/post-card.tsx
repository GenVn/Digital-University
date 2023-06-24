import Link from "next/link"
import Image from "next/image"
import { BiBookmarks } from "react-icons/bi"

interface FirstPostCardProps {
  authorImgSrc: string
  authorName: string
  postDate: string
  postImgSrc: string
  postTitle: string
  postTopic: string
  postReaction: number
  postComment: number
}

interface PostCardProps {
  authorImgSrc: string
  authorName: string
  postDate: string
  postImgSrc?: string | null
  postTitle: string
  postTopic: string
  postReaction: number
  postComment: number
}

export function FirstPostCard({
  authorImgSrc,
  authorName,
  postImgSrc,
  postDate,
  postTitle,
  postTopic,
  postReaction,
  postComment,
}: FirstPostCardProps) {
  return (
    <div className="flex flex-col gap-4 py-2 w-full max-h-md bg-white border border-gray-300 rounded-lg">
      {/* hình của post */}
      <div className="w-full relative xl:h-[300px] max-h-64 h-full">
        <Image
          src={postImgSrc}
          fill={true}
          alt={`${postTitle} image`}
          className="rounded-lg"
        />
      </div>
      {/* Bao post title, user icon, topics, reaction,... */}
      <div className="flex flex-col gap-4 px-4 py-2">
        {/* Cục bao user post info */}
        <div className="flex gap-4 h-[48px]">
          <Link href={"/"} className="w-12 h-12 relative">
            <Image
              src={authorImgSrc}
              fill={true}
              alt="user avt"
              className="rounded-full"
            ></Image>
          </Link>
          <div className="flex h-full flex-col justify-between">
            <Link
              href={"/"}
              className="h-[50%] text-base font-semibold text-gray-700 cursor-pointer
            transition-all ease-in-out duration-100
            hover:font-bold hover:text-gray-950
          "
            >
              {authorName}
            </Link>
            <span className="h-[50%] text-sm text-gray-500 hover:text-gray-700">
              {postDate}
            </span>
          </div>
        </div>
        {/* cục bao title, topics, thanh react, comment,... */}
        <div className="pl-16 flex flex-col gap-4">
          {/* title */}
          <h2
            className="text-4xl cursor-pointer font-bold text-gray-950
          hover:text-blue-700
            transition-all ease-in-out duration-100"
          >
            {postTitle}
          </h2>
          {/* topics */}
          <div className="flex gap-2">
            <span
              className=" px-2 py-1 rounded-lg text-gray-600 cursor-pointer
              transition-all ease-in-out duration-150
            hover:bg-gray-200
              "
            >
              {postTopic}
            </span>
          </div>
          <div className="flex gap-2">
            <span
              className=" px-2 py-1 rounded-lg text-gray-600 cursor-pointer
              transition-all ease-in-out duration-150
            hover:bg-gray-200
              "
            >
              {`${postReaction} Reactions`}
            </span>
            <span
              className=" px-2 py-1 rounded-lg text-gray-600 cursor-pointer
              transition-all ease-in-out duration-150
            hover:bg-gray-200
              "
            >
              {`${postComment} Comments`}
            </span>
            <span
              className="flex items-center justify-center p-2 ml-auto text-gray-600 cursor-pointer
              transition-all ease-in-out duration-150 hover:bg-gray-200 rounded-lg
              "
            >
              <BiBookmarks />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PostCard({
  authorImgSrc,
  authorName,
  postImgSrc = null,
  postDate,
  postTitle,
  postTopic,
  postReaction,
  postComment,
}: PostCardProps) {
  return (
    <div className="flex flex-col gap-4 py-2 w-full max-h-md bg-white border border-gray-300 rounded-lg">
      {/* Bao post title, user icon, topics, reaction,... */}
      <div className="flex flex-col gap-4 px-4 py-2">
        {/* Cục bao user post info */}
        <div className="flex gap-4 h-[48px]">
          <Link href={"/"} className="w-12 h-12 relative">
            <Image
              src={authorImgSrc}
              fill={true}
              alt="user avt"
              className="rounded-full"
            ></Image>
          </Link>
          <div className="flex h-full flex-col justify-between">
            <Link
              href={"/"}
              className="h-[50%] text-base font-semibold text-gray-700 cursor-pointer
            transition-all ease-in-out duration-100
            hover:font-bold hover:text-gray-950
          "
            >
              {authorName}
            </Link>
            <span className="h-[50%] text-sm text-gray-500 hover:text-gray-700">
              {postDate}
            </span>
          </div>
        </div>
        {/* cục bao title, topics, thanh react, comment,... */}
        <div className="pl-16 flex flex-col gap-4">
          {/* title */}
          <h2
            className="text-2xl cursor-pointer font-bold text-gray-950
          hover:text-blue-700
            transition-all ease-in-out duration-100"
          >
            {postTitle}
          </h2>
          {/* topics */}
          <div className="flex gap-2">
            <span
              className=" px-2 py-1 rounded-lg text-gray-600 cursor-pointer
              transition-all ease-in-out duration-150
            hover:bg-gray-200
              "
            >
              {postTopic}
            </span>
          </div>
          <div className="flex gap-2">
            <span
              className=" px-2 py-1 rounded-lg text-gray-600 cursor-pointer
              transition-all ease-in-out duration-150
            hover:bg-gray-200
              "
            >
              {`${postReaction} Reactions`}
            </span>
            <span
              className=" px-2 py-1 rounded-lg text-gray-600 cursor-pointer
              transition-all ease-in-out duration-150
            hover:bg-gray-200
              "
            >
              {`${postComment} Comments`}
            </span>
            <span
              className="flex items-center justify-center p-2 ml-auto text-gray-600 cursor-pointer
              transition-all ease-in-out duration-150 hover:bg-gray-200 rounded-lg
              "
            >
              <BiBookmarks />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
