import React, { Component } from 'react'
import axios from 'axios';
import { Badge, Button, Table, Form } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export class AddCar extends Component {


    constructor(props) {
        super(props);

        this.state = { carBrand: "", carName: "", carColor: "", carType: "" };
        this.handleCarBrandChange = this.handleCarBrandChange.bind(this);
        this.handleCarNameChange = this.handleCarNameChange.bind(this);
        this.handleCarColorChange = this.handleCarColorChange.bind(this);
        this.handleCarTypeChange = this.handleCarTypeChange.bind(this);
    }

    handleCarBrandChange(event) {
        this.setState({
            carBrand: event.target.value
        });
    
    }
    handleCarNameChange(event) {
        this.setState({
            carName: event.target.value
        });
    }
    handleCarColorChange(event) {
        this.setState({
            carColor: event.target.value
        });
    }
    handleCarTypeChange(event) {
        this.setState({
            carType: event.target.value
        });
        console.log(this.state.carType);
    }


    
    async addCar() {

        const {
           
            carBrand,
            carName,
            carColor,
            carType
            
        } = this.state;
       

        try {
            
            await axios.post('https://localhost:7072/api/Inventory/add-car', {
              
                carBrand: carBrand,
                carName: carName,
                carColor: carColor,
                carType: carType,


            }).then((response) => {

                console.log(response.data);
                console.log(response.data);
                console.log(response.status);


            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
  
        return (
            <div>
                <h1><Badge bg="danger">Add New Car</Badge></h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Vehicle Brand</Form.Label>
                        <Form.Control type="text" onChange={this.handleCarBrandChange} placeholder="Vehicle Brand" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Vehicle Name</Form.Label>
                        <Form.Control type="text" onChange={this.handleCarNameChange} placeholder="Vehicle Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Vehicle Color</Form.Label>
                        <Form.Control type="text" onChange={this.handleCarColorChange} placeholder="Vehicle Color" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Vehicle Type</Form.Label>
                        <Form.Control type="text" onChange={this.handleCarTypeChange} placeholder="Vehicle Type" />
                    </Form.Group>
                    <Button onClick={() => { this.addCar() }} >
                        Add Vehicle
                    </Button>
                </Form>
            </div>
        );
    }




}
//hide the add and update forms?
//https://stackoverflow.com/questions/58605846/how-to-show-a-form-in-the-same-window-on-onclick-event-of-a-button-in-react-js
