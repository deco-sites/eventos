export interface Props {
  url: string;
}

export default function Func(props: Props) {
  return (
    <iframe
      src={props.url}
      frameborder="0"
      width="1920"
      height="1109"
      allowFullScreen={true}
    >
    </iframe>
  );
}
