import Input from '../Input/Input';
import styles from './Search.module.css';

function Search({ setQuery }) {
  return (
    <div className={styles.content}>
      <Input
        name="searchInput"
        placeholder="Search task"
        onChange={(e) => setQuery(e.target.value.toLowerCase().trim())}
      />
    </div>
  );
}
export default Search;
