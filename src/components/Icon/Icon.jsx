export default function Icon({
  id,
  className = "",
  width = 16,
  height = 16,
  stroke,
  fill,
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      stroke={stroke}
      fill={fill}
    >
      <use href={`/public/sprite.svg#${id}`} />
    </svg>
  );
}
