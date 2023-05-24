import { FC } from "react";
import { useNavigate } from "react-router-dom";
import BackBtn from "../../components/form/button/backBtn";

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
            <br />
            <BackBtn onClick={goBack}>Go Back</BackBtn>
        </section>
    );
};

export default NotFound;
