
// Un composant en React peut etre une fonction s'il n'a pas de state : d'état qui bouge (compteur...)

const Hello = (props) => {
  return (
    <div>
      Hello,
      {props.name}
    </div>
  );
};

// Dans le cas ou il a des états qui varient, il faut le définir comme étant une classe
// On peut le définir tout le temps comme une classe
// Une class a donc un constructeur ac props et state, des méthodes qui lui sont propres et tjs la méthode render() qui correspond a ce qui est renvoyé


class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      counter: 0
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div className={this.state.clicked ? 'clicked' : null}  onClick={this.handleClick} >Hello {this.props.name} {this.state.counter}</div>
    )
  }
}
