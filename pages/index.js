import Search from "../components/Search";
import Card from "../components/Card";
import fetch from "isomorphic-unfetch";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: "",
      searchText: ""
    };
  }

  handlesubmit = async changeText => {
    await this.setState({
      searchText: changeText
    });

    const res = await fetch(
      `https://api.tvmaze.com/search/shows?q=${this.state.searchText}`
    );

    const data = await res.json();

    console.log(`show data fetch:${data[0].show.name}`);

    await this.setState({
      datas: data
    });
  };

  render() {
    return (
      <div>
        <div className="search-div">
          <Search
            onSubmit={searchText => {
              this.handlesubmit(searchText);
            }}
          />
        </div>
        <div className="card-div">
          {this.state.datas &&
            this.state.datas.map((show, index) => {
              return (
                <Card
                  key={index}
                  showname={show.show.name}
                  showgenres={show.show.genres}
                />
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

export default Index;
