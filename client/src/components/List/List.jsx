import React from "react";
import './list.scss';
import Card from '../Card/Card';
import useFetch from "../../hooks/useFetch";
function List({catId, maxPrice, sort, selectedSubCategories}){

    const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id][$eq]=${catId}${selectedSubCategories.map((item)=>`&[filters][sub_categories][id][$eq]=${item}`)}
    &[filters][price][$lte]=${maxPrice}&sort=price:${sort ? sort : 'desc'}`
    );

    return (
      <div className="cardList">
        {error
          ? "Something went wrong:" + error
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    );
}
export default List;