import Categories from "../../components/Categories/Categories";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";

export default function Home() {
    return (
        <div className="Home">
            <Slider/>
            <FeaturedProducts type="newest"/>
            <Categories/>
            <FeaturedProducts type="trending"/>
        </div>
    )
}