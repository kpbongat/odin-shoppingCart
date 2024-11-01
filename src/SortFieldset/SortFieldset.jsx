import styles from "./SortFieldset.module.css";

function sortLatest(a, b) {
  return +b.id - +a.id;
}

function sortOldest(a, b) {
  return +a.id - +b.id;
}
function sortLowPrice(a, b) {
  return +a.price - +b.price;
}

function sortHighPrice(a, b) {
  return +b.price - +a.price;
}
function SortFieldset({ setSortCategory }) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>Sort by:</legend>

      <div>
        <label className={styles.label} htmlFor={"dateLatest"}>
          <input
            className={styles.input}
            type="radio"
            name="sort"
            id={"dateLatest"}
            onClick={() => setSortCategory(() => sortLatest)}
          />
          Date: Latest
        </label>
      </div>
      <div>
        <label className={styles.label} htmlFor={"dateOldest"}>
          <input
            className={styles.input}
            type="radio"
            name="sort"
            id={"dateOldest"}
            onClick={() => setSortCategory(() => sortOldest)}
          />
          Date: Oldest
        </label>
      </div>
      <div>
        <label className={styles.label} htmlFor={"priceLow"}>
          <input
            className={styles.input}
            type="radio"
            name="sort"
            id={"priceLow"}
            onClick={() => setSortCategory(() => sortLowPrice)}
          />
          Price: Low to High
        </label>
      </div>
      <div>
        <label className={styles.label} htmlFor={"priceHigh"}>
          <input
            className={styles.input}
            type="radio"
            name="sort"
            id={"priceHigh"}
            onClick={() => setSortCategory(() => sortHighPrice)}
          />
          Price: High to Low
        </label>
      </div>
    </fieldset>
  );
}
export default SortFieldset;
