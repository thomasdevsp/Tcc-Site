import { ContentIcon } from './styles'

interface IconProps {
  link: string;
  text: string;
}

export function ContainerIcon(props: IconProps) {
  return (
    <ContentIcon>
      <img src={props.link} />
      <span>{props.text}</span>
    </ContentIcon>
  )
}