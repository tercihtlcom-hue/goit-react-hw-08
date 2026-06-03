import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <div className={styles.filter}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={styles.input}
      />
    </div>
  );
}