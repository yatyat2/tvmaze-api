import Search from "../components/Search";
import Card from "../components/Card";
import fetch from "isomorphic-unfetch";
import store from "../Store";
import { observer } from "mobx-react";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAllFetch: false
    };
  }

  render() {
    return (
      <div>
        <div className="search-div">
          <Search onSubmit={this.handleSubmit} />
        </div>
        <div className="card-div">
          {!this.state.isAllFetch &&
            store.shows.size > 0 && <div className="loading-state">로딩중</div>}
          {this.state.isAllFetch &&
            Array.from(store.shows.values()).map((step, index) => {
              return (
                <Card
                  key={index}
                  showname={step.name}
                  showgenres={Array.from(step.genre)}
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

            .loading-state {
              text-align: center;
              color: red;
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

  handleSubmit = async searchText => {
    await this.setState({
      isAllFetch: false
    });

    const res = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchText}`
    );
    const data = await res.json();

    await data.map((showInfo, index) => {
      store.addShowInfo(`${index}`, showInfo.show.name, showInfo.show.genres);
    });

    await this.setState({
      isAllFetch: true
    });
  };
}

export default observer(Index);
