
import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'react-loading';
import { connect } from 'react-redux';
import Header from './Header';
import { getUserData } from '../actions';
import UserCard from './UserCard';

class App extends React.Component{
    static fetchData ({ dispatch,getState }) {
        console.log("CURRENT STATE:",  getState());
        return [dispatch(getUserData())];
    }

    componentDidMount(){
       
        this.props.getUserData();
    }

    render(){
        const { isLoading, users } = this.props;
        return(
            <div>
                <Header />
                {
                  
                    (isLoading && users.length ===0 ) ? <Loading className="loading" color="#14233c" /> : users.map((user)=> <UserCard key={user.id} {...user} />)
                   
                }
            </div>
        );
    }

};

App.propTypes ={
    isLoading : PropTypes.bool.isRequired,
    users : PropTypes.arrayOf( PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
        city:PropTypes.string,
        website:PropTypes.string,
        
    })),
    getUserData: PropTypes.func.isRequired,
};

App.defaultProps ={
    users:[],
               
};

const mapStateToProps = ({users:{isLoading},users:{lists}}) => {
    
    return {
        isLoading,
        users: lists
    };
};
export default connect(mapStateToProps,{getUserData})(App);

