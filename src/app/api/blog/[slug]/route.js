import { Post } from "@/librairies/models";
import { connectToDb } from "@/librairies/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { slug } = params;
  try {
    connectToDb();

    const posts = await Post.findOne({slug});
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};