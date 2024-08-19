function Face({ i }: { i: number }) {
  const imgUrl = new URL(`../../assets/body/body${i}.png`, import.meta.url)
    .href;

  return <img src={imgUrl} />;
}

export default Face;
