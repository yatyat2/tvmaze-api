class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: ""
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <input
          type="text"
          className="search-window"
          placeholder="프로그램 이름"
          onChange={this.handleChangeSearchKeyword}
          value={this.state.searchKeyword}
        />
        <button type="submit" className="search-buuton">
          검색
        </button>
        <style jsx>{`
          .search-form {
            display: flex;
          }

          .search-window {
            color: orange;
            border: 1px solid orange;
            decoration: none;
            outline: 0;
          }

          .search-buuton {
            color: white;
            background-color: orange;
            border: 1px solid orange;
            outline: 0;
          }
        `}</style>
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchKeyword);
  };

  handleChangeSearchKeyword = event => {
    this.setState({ searchKeyword: event.currentTarget.value });
  };
}

export default Search;
