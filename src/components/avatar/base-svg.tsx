function BaseSvg({
  width,
  height,
  className,
  children,
}: {
  width?: number;
  height?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      id="Face"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1920 2420"
      className={className}
    >
      {children}
    </svg>
  );
}

export default BaseSvg;
