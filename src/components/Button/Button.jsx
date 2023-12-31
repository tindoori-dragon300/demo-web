import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import './Button.css'

function Button(props) {
  return <AwesomeButton type="primary">
          <a id='button-text'>{props.text}</a>
        </AwesomeButton>;
}

export default Button;