import Card from '../Card/Card';
import './featuredProducts.scss';
import useFetch from '../../hooks/useFetch';

function FeaturedProducts({type}){

    const {data, loading, error} = useFetch(`/products/?populate=*&[filters][type][$eq]=${type}`);

    return (
      <div className="featuredProducts">
        <div className="top">
          <h3>{type} products</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus odit
            consectetur, dolore minus doloremque vitae placeat impedit iure
            praesentium, dignissimos, tenetur saepe. Beatae ipsa blanditiis
            consequuntur fuga nisi pariatur iste!
          </p>
        </div>
        <div className="bottom">
          {error ? ('Something went wrong : ' + error ): (loading
            ? "loading"
            : data.map((item) => <Card item={item} key={item.id} />))}
        </div>
      </div>
    );
}
export default FeaturedProducts;