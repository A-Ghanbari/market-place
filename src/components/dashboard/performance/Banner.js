import banner from "assets/images/banner.jpg"
import responsiveBanner from "assets/images/Responsive.jpg"
import useWindowSize from "hooks/useWindowSize"

export default function Banner() {
    const { width } = useWindowSize()

    return (
        <div className="banner">
            <img src={width > 576 ? banner : responsiveBanner} />
        </div>
    )
}
