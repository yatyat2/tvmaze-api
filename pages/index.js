import Search from "../components/Search";
import Card from "../components/Card";
import fetch from "isomorphic-unfetch";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: "",
      searchText: ""
    };
  }

  datafetch = async () => {
    // if (this.state.shows === "")
    const res = await fetch(
      `https://api.tvmaze.com/search/shows?q=${this.state.searchText}`
    );
    const data = await res.json();

    console.log(`show data fetch Count:${data[0].show.name}`);

    this.setState({
      shows: data
    });

    // data.map(step => {
    //   this.setState({
    //     showname: step.show.name,
    //     showgenres: step.show.genres
    //   });
    // });
  };

  handlesubmit = changeText => {
    this.setState({
      searchText: changeText
    });
  };

  render() {
    // Index.getInitialProps = async function() {
    //   const res = await fetch(`https://api.tvmaze.com/search/shows?q=batman`);
    //   const data = await res.json();

    //   console.log(`show data fetch Count:${data.name}`);
    //   return {
    //     shows: data
    //   };
    // };

    const { searchText } = this.state;
    return (
      <div>
        <div className="search-div">
          <Search
            onSubmit={searchText => {
              this.handlesubmit(searchText);
            }}
            handleFetch={() => this.datafetch()}
            // onSubmit={() => alert("넘어가유")}
          />
        </div>
        <div className="card-div">
          {/* {this.state.shows[0] && this.state.shows[0].show.name} */}
          {/* {this.state.showname} */}
          {/* {(this.state.shows && this.state.shows.show.name).map(step => {
            return <Card showname={step} showgenres={step} />;
          })} */}
          <Card
            showname={this.state.shows[0] && this.state.shows[0].show.name}
            showgenres={
              this.state.shows[0] && this.state.shows[0].show.genres[0]
            }
          />
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

// Index.getInitialProps = async function() {
//   const res = await fetch(`https://api.tvmaze.com/search/shows?q=batman`);
//   const data = await res.json();

//   console.log(`show data fetch Count:${data.name}`);
//   return {
//     shows: data
//   };
// };

export default Index;
