import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

import "./List.scss";

export default function List({ subCat, maxPrice, sort, catId }) {
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][categories][id]=${catId}${subCat.map(
  //     (item) => `&[filters][sub_categories][id][$eq]=${item}`
  //   )}&[filters][price][$lte]=${maxPrice}&sort[price]=${sort}`
  // );

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCat.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}`
  );

  return (
    <div className="list">
      {error
        ? "Something went wrong!"
        : loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
}