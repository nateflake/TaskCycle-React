interface Props {
  color: string,
  title: string,
  onClick: () => void
}

export default function GenericButton({ color, title, onClick }: Props) {
  return (
    <button className='btn' onClick={() => onClick()} style={{ backgroundColor: color }}>{title}</button>
  );
}