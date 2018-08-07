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
          프로그램 이름입니다.
        </div>
        <div className={this.state.activeState ? "active-content" : "content"}>
          프로그램 내용입니다.
        </div>
        <style jsx>
          {`
            .card-form {
              border-bottom: 1px dotted grey;
            }
            .content {
              display: none;
            }

            .active-content {
              color: red;
              border-bottom: 1px dotted grey;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Card;
