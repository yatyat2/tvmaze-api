class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeState: false,
      test: []
    };
  }

  render() {
    let nogenre = null;
    if (this.props.showgenres.length == 0) {
      nogenre = "No Genre";
    } else {
      nogenre = null;
    }

    return (
      <div>
        <div
          className="card-form"
          onClick={() => {
            this.setState({
              activeState: !this.state.activeState
            });
          }}
        >
          {this.props.showname}
        </div>
        <div className={this.state.activeState ? "active-content" : "content"}>
          {this.props.showgenres &&
            this.props.showgenres.map(step => {
              return <li>{step}</li>;
            })}
          {nogenre && <li>{nogenre}</li>}
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
