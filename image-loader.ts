export default function supabaseLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}) {
  if (src.includes("ctfassets.net")) {
    let url = `${src}?w=${width}&q=${quality || 75}&fm=webp`;

    if (!src.startsWith("https:")) url = `https:${url}`;

    return url;
  }

  return `${src}?w=${width}&q=${quality || 100}`;
}
