import mahexLogo from "assets/images/mahex.png";
import postLogo from "assets/images/post.png";

export default function PostImage({ companyId }) {
    return (
        <img
            style={{ width: "32px", height: "32px" }}
            alt={+companyId === 1 ? "پست جمهوری اسلامی ایران" : "پست ماهکس"}
            src={+companyId === 1 ? postLogo : mahexLogo}
        />
    );
}
