import React, { Component } from 'react'
import axios from 'axios';
import { Badge, Button, Table, Form } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export class DeleteCar extends Component {


    constructor(props) {
        super(props);

        this.state = { inventoryID: "" };
        this.handleInventoryIDChange = this.handleInventoryIDChange.bind(this);

    }

    handleInventoryIDChange(event) {
        this.setState({
            inventoryID: event.target.value
        });
    
    }
  


    
    async deleteCar() {

        const {
           
            inventoryID
      
        } = this.state;
        console.log(inventoryID);

        try {
            
            await axios.post('https://localhost:7072/api/Inventory/delete-car', {
              
                inventoryID: inventoryID

            }).then((response) => {

                console.log(response.data);
                console.log(response.data[0]);
                console.log(response.status);

                this.setState({loading: false });




            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
  
        return (
            <div>
                <h1><Badge bg="danger">Delete Car</Badge></h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Inventory ID</Form.Label>
                        <Form.Control type="text" onChange={this.handleInventoryIDChange} placeholder="Inventory ID" />
                    </Form.Group>

                 
                    <Button onClick={() => { this.deleteCar() }} >
                        Delete Vehicle
                    </Button>
                </Form>
            </div>
        );
    }




}
//hide the add and update forms?
//https://stackoverflow.com/questions/58605846/how-to-show-a-form-in-the-same-window-on-onclick-event-of-a-button-in-react-js
