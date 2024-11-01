import styles from "./CategoryFieldset.module.css";

function CategoryFieldset({ categories, filterCategory, setFilterCategory }) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>Filter by Category:</legend>
      {categories.map((i) => (
        <div key={i}>
          <label className={styles.label} htmlFor={i}>
            <input
              className={styles.input}
              checked={i === filterCategory}
              type="checkbox"
              name="category"
              id={i}
              onClick={(e) => setFilterCategory(e.target.checked ? i : null)}
            />
            {i}
          </label>
        </div>
      ))}
    </fieldset>
  );
}

export default CategoryFieldset;
