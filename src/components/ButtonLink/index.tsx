import { ButtonComponent } from "./styles";

interface ButtonProps {
  title: string;
  link: string;
}

export function ButtonLink(props: ButtonProps) {
  return (
    <a href={props.link} target="blank"><ButtonComponent>{props.title}</ButtonComponent></a>
  )
}