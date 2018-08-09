class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      test: []
    };
  }

  render() {
    return (
      <div>
        <div
          className="card-form"
          onClick={() => {
            this.setState({
              activeState: !this.state.isOpen
            });
          }}
        >
          {this.props.showname}
        </div>
        <div className={this.state.isOpen ? "active-content" : "content"}>
          {this.props.showgenres && this.props.showgenres.length > 0 ? (
            this.props.showgenres.map((genre, index) => {
              return <li key={index}>{genre}</li>;
            })
          ) : (
            <li>No Genre</li>
          )}
        </div>
        <style jsx>
          {`
            .card-form {
              border-bottom: 1px dotted grey;
              padding: 15px;
            }
            .content {
              display: none;
            }

            .active-content {
              color: red;
              border-bottom: 1px dotted grey;
              padding: 15px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Card;
