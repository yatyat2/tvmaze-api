import Search from "../components/Search";
import Card from "../components/Card";
import fetch from "isomorphic-unfetch";
import store from "../Store";
import { observer } from "mobx-react";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="search-div">
          <Search onSubmit={this.handleSubmit} />
        </div>
        <div className="card-div">
          {store.shows.size > 0 &&
            Array.from(store.shows.values()).map((step, index) => {
              return (
                <Card key={index} showname={step.name} showgenre={step.genre} />
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

  handleSubmit = async searchText => {
    const res = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchText}`
    );
    const data = await res.json();

    await data.map((showInfo, index) => {
      store.addShowInfo(
        `${index}`,
        showInfo.show.name,
        showInfo.show.genres[0]
      );
    });
  };
}

export default observer(Index);
