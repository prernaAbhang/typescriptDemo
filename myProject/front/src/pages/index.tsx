import FordCars from "../../components/FordCars";
import "bootstrap/dist/css/bootstrap.min.css";

function IndexPage({ data }) {
    return data && data.length ? (
        <FordCars data={data} />
    ) : (
        <div className="alert alert-danger" role="alert">
            Something went wrong!
        </div>
    );
}

export const getServerSideProps = async () => {
    try {
        const response = await fetch(`http://localhost:9000/get_ford_cars`);
        const data = await response.text();
        return { props: { data: JSON.parse(data) } };
    } catch (e) {
        return { props: { data: {} } };
    }
};

export default IndexPage;
