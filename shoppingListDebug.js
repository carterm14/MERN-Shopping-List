import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { timingSafeEqual } from 'crypto';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemAction'
import PropTypes from 'prop-types';
 

class ShoppingList extends Component {
    
    //New code
    // render() {
    //     const items = this.state.items; 
    //    return ( <h1>{items.map(item => item.name.toString())}</h1> );
    // }
    componentDidMount() {
        this.props.getItems();
    } 




    render() {
        const { items } = this.props.item; //this is now destructured, change the instances below to destructured
        return (
            <Container>
                <Button
                    color='dark'
                    style={{ marginBottom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter Item');
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }]
                            }));
                        }
                    }}
                >Add Item</Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick= {() => {
                                            this.setState(state => ({
                                                items: state.items.filter(currItem => currItem.id !== id)
                                            }));
                                        }}
                                    >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    Item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems })(ShoppingList);