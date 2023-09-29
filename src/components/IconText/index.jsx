import { ContentIcon } from './styles'

export function IconText(props) {
  return (
    <ContentIcon>
      <img src={props.Link} />
      <span>{props.Text}</span>
    </ContentIcon>
  )
}