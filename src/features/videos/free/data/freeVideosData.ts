import { ClassItem } from "@/slices/classes";

/** Default free wellness videos from Figma/HTML design. Image URLs hotlinked from design source. */


/** Get a free video by slug, or undefined if not found. */
export async function getFreeVideoBySlug(slug: string): Promise<ClassItem | undefined> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/client/classes/${slug}`,
      {
        next: { revalidate: 60 }, // ISR caching (optional)
      }
    );
    if (!res.ok) throw new Error("Failed to fetch services");

    const data = await res.json();

    return data.data.class;
  } catch (error) {
    console.error("Error fetching services:", error);
    return undefined;
  }
}
