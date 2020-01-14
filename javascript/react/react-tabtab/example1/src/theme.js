import styled from 'styled-components';
import { styled as themeStyled } from 'react-tabtab';

let {TabListStyle, ActionButtonStyle, TabStyle, PanelStyle} = themeStyled;

TabListStyle = styled(TabListStyle)`
  border-bottom: 1px solid #eee;
`;

TabStyle = styled(TabStyle)`
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  color: ${props => props.active ? 'black' : '#007bff'};
  border: 1px solid transparent;
  ${props => props.active && props.vertical ?
    `
      background-color: #eee;
    `
  : null}
  ${props => props.active && !props.vertical ?
    `
      border-color: #ddd #ddd #fff;
    `
  : null}
`;

export default {
  TabList: TabListStyle,
  ActionButton: ActionButtonStyle,
  Tab: TabStyle,
  Panel: PanelStyle
}
