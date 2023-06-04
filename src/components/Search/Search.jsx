import Input from '../Input/Input';
import styles from './Search.module.css';

function Search({ setQuery, value }) {
  return (
    <div className={styles.content}>
      <Input
        name="searchInput"
        placeholder="Search task"
        value={value}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
export default Search;
