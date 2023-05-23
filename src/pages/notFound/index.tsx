import { FC } from "react";
import "./notFound.css"
import { useNavigate } from "react-router-dom";

const NotFound: FC = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <section className="center">
            <h1>Not Found</h1>
            <p>
                The page you are looking for does not exist. <br /> How you got here is
                still a mystery.
            </p>
            <div>
                <button className="go-back" onClick={goBack}>Go Back</button>
            </div>
        </section>
    );
};

export default NotFound;
