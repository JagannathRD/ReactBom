import { useNavigate } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

export default function WithRouter(props) {
    const navigation = useNavigate();
  
    return <HeaderComponent {...props} navigation={navigation} />;
  }