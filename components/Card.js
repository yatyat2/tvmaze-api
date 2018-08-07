class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeState: false
    };
  }

  render() {
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
          {/* {this.props.showgenres.map(genres => {
            return <li>{genres}</li>;
          })} */}
          {this.props.showgenres}
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
