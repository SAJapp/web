import { NextResponse } from 'next/server';
import { createClient } from "@/util/supabase/server";

async function UploadFile(file) {
  const supabase = createClient()
  console.log("Uploading file:", file.name);
  const buffer = await file.arrayBuffer();
  const { data, error } = await supabase.storage.from("post_images")
    .upload(`${crypto.randomUUID()}`, buffer, {
      contentType: file.type,
      cacheControl: "31536000, immutable",
      upsert: true,
    });

  console.log("Upload result:", data, error);
  return data;
}

export async function POST(req) {
  const supabase = createClient()
  const formData = await req.formData();
  const files = formData.getAll('images');
  console.log("Form data received:", formData);

  const uploadPromises = files.map(async (file) => {
    console.log("Processing file:", file.name);
    const uploadData = await UploadFile(file);
    console.log("File processed:", file.name);
    return uploadData;
  });

  const uploadResults = await Promise.allSettled(uploadPromises);
  console.log("All files processed");

  const urlIds = uploadResults
    .filter(result => result.status === 'fulfilled' && result.value)
    .map(result => result.value.path);

  const fields = Object.fromEntries(formData);
  const category = [fields.category];
  const { data: response, error } = await supabase.from('posts').upsert({
    created_at: new Date(),
    author_id: fields.userID,
    pictures: urlIds,
    description: fields.comment,
    price: fields.price,
    condition: fields.condition,
    title: fields.title,
    category: category,
  }).select();

  if (error) {
    console.error("Error inserting post:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }

  return NextResponse.json({ message: "Success", data: response }, { status: 200 });
}