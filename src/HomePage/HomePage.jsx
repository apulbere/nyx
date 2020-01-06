import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                {users && users.items && users.items.map(quote =>
                    <blockquote key={quote.id}>
                        <p>{quote.text}</p>
                        <footer>
                            <cite>{quote.book.title + ', ' +quote.author.name}</cite>
                        </footer>
                    </blockquote>
                )}
                <p className="text-center">
                    <Link to="/login">Logout</Link>
                </p>
            </div>
            
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };