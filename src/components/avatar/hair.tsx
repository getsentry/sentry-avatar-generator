export type HairColor = "black" | "blonde" | "brown" | "red";

function Hair({ color }: { color: HairColor }) {
  const imgUrl = new URL(`../../assets/hair/hair-${color}.png`, import.meta.url)
    .href;

  return <img src={imgUrl} />;
}

export default Hair;
