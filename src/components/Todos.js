
import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'react-loading';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllTodos } from '../actions';
import Header from './Header';

class Todos extends React.Component{
    static fetchData ({ dispatch,getState,path }) {
        console.log("CURRENT STATE:",  getState());
        console.log(path.substr(path.lastIndexOf("/")+1));
        return [dispatch(getAllTodos(path.substr(path.lastIndexOf("/")+1)))];
    }

    componentDidMount(){
       
        this.props.getAllTodos();
    }
   
    renderList = ({title,id}) => <li className="collection-item" key={id}><Link to={`/todos/${id}`}> {title}</Link></li>

    render(){
        const { isLoading, todos } = this.props;
        return(
            <div>
                <Header />
                {
                  
                    (isLoading && todos.length ===0 ) ? <Loading className="loading" color="#14233c" /> : 
                        <ul className="collection">
                            { todos.map((todo) => this.renderList(todo))}
                        </ul>
                   
                }
              
            </div>
        );
    }

};

Todos.propTypes ={
    isLoading : PropTypes.bool.isRequired,
    todos : PropTypes.arrayOf( PropTypes.shape({
        id: PropTypes.number,
        userId: PropTypes.number,
        title: PropTypes.string,
        
    })),
    getAllTodos: PropTypes.func.isRequired,
};

Todos.defaultProps ={
    todos:[],
               
};

const mapStateToProps = ({todos:{isLoading},todos:{lists}}) => {
    
    return {
        isLoading,
        todos: lists
    };
};
export default connect(mapStateToProps,{getAllTodos})(Todos);

