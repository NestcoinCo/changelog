export default function myImageLoader({ src, width, height, quality }) {
  return `https://i.ibb.co/${src}?w=${width}&h=${height}&q=${quality || 75}`;
}
