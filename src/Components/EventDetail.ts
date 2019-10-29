

class EventDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: Event
        }
    }
    componentDidMount() {
        Axios.get('http://localhost:8000/events/' + this.props.id)
    }
}