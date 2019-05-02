import React from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import {  getTodoById } from '../actions';

class TodoCard extends React.PureComponent{
    static fetchData ({ dispatch,getState }) {
        console.log("CURRENT STATE:",  getState());
        return [dispatch(getTodoById())];
    }

    componentDidMount() {
        
        this.props.getTodoById(this.props.match.params.id);
    }

    render()
    {
        
        const { todo:{title, completed : status} } = this.props;
        return(
         
            <div>
                <h4>{title}</h4>
                { status === false && <i className="material-icons">edit</i>} 
                { status === true && <i className="material-icons">done</i>} 
            </div>
         
        );
    }

};

TodoCard.propTypes ={
    todo : PropTypes.shape({
     
        status: PropTypes.bool,
        title:PropTypes.string
    }),
    getTodoById: PropTypes.func.isRequired,
};
TodoCard.defaultProps= {
    todo :{
        status:false,
        title: ""
    }
    
};

const mapStateToProps = ({todo}) => ({todo});

export default connect(mapStateToProps,{getTodoById})(TodoCard);

