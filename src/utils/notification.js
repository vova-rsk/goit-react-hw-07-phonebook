import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const settings = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const showWarninigNotification = text => {
  toast.error(text, settings);
};

export default showWarninigNotification;
