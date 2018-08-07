import Search from "../components/Search";
import Card from "../components/Card";

class Index extends React.Component {
  render() {
    return (
      <div>
        <div className="search-div">
          <Search />
        </div>
        <div className="card-div">
          <Card />
          <Card />
        </div>

        <style jsx>
          {`
            .search-div {
              display: flex;
              justify-content: center;
              margin-top: 200px;
            }

            .card-div {
              display: flex;
              margin-top: 50px;
              padding: 50px 150px;
              flex-direction: column;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Index;
