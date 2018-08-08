import Search from "../components/Search";
import Card from "../components/Card";
import fetch from "isomorphic-unfetch";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "batman"
    };
  }

  render() {
    return (
      <div>
        <div className="search-div">
          <Search />
        </div>
        <div className="card-div">
          {this.props.shows.map(show => {
            return (
              <Card showname={show.show.name} showgenres={show.show.genres} />
            );
          })}
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

Index.getInitialProps = async function() {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=batman`);
  const data = await res.json();

  console.log(`show data fetch Count:${data.name}`);
  return {
    shows: data
  };
};

export default Index;
