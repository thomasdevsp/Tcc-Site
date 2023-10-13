import { ButtonComponent } from "./styles";

export function Button(props) {
  return (
    <a href="https://www.youtube.com/watch?v=XoTwhyjZIUs" target="blank"><ButtonComponent>{props.title}</ButtonComponent></a>
  )
}