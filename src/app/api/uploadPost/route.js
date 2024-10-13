import { NextResponse } from 'next/server';
import { createClient } from "@/util/supabase/server";
import { Formidable } from "formidable";
import fs from "fs"

export async function POST() {
  try {
    const supabase = createClient()
    const { data, error } = await supabase.from("posts").select();

    if (error) {
      throw new Error(error.message);
    }
    return NextResponse.json({data}, { status: 200 });
  } catch (err) {
    console.error("Error:", err.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
