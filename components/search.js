class Search extends React.Component {
  render() {
    return (
      <form className="search-form">
        <input
          ref="search"
          type="text"
          className="search-window"
          placeholder="프로그램 이름"
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
}

export default Search;