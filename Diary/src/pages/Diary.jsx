import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';

const Diary = () => {
  const params = useParams();

  return (
    <div>
      <Header
        title={'yyyy-mm-dd'}
        leftChild={<Button />}
        rightChild={<Button />}
      />
    </div>
  );
};
export default Diary;
