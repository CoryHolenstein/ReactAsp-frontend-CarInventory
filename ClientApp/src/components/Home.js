import React, { Component } from 'react'
import axios from 'axios';
import { Badge, Button, Table, Form } from 'react-bootstrap';



export class Home extends Component {


    constructor(props) {
        super(props);
        this.state = { allCars: "", nextPage: "", previousPage: "", loading: true };
    }

    componentDidMount() {


        this.grabAllCars();

    }
    async grabAllCars() {
        try {
            await axios.post('https://localhost:7072/api/Home/get-all-cars', {
            }).then((response) => {
               
                console.log(response.data);
                console.log(response.data[0]);
                console.log(response.status);

                this.setState({ allCars: response.data, loading: false });
        
              


            });
        } catch (error) {
            this.setState({ serverCallStatus: "Already exists or bad credentials." });
        }
    }
    async loadNextPage(pageNum) {
        await axios.get('https://localhost:7282/api/Hero/get-next-page/' + pageNum)
            .then((response) => {
                console.log(response);
                console.log(response.status);
                console.log(response.data.next);
                console.log(response.data.previous);
                this.setState({ allCars: response.data.results, nextPage: response.data.next, previousPage: response.data.previous });

            });
    }

    static renderCarsTable(cars) {
        return (
            <Table className="styled-table" aria-labelledby="tabelLabel" >
                <thead className="thead">
                    <tr>
                        <th>ID</th>
                        <th>Brand</th>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Type</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {cars.map(car =>
                        <tr key={car.InventoryID} >
                            <td>{car.InventoryID}</td>
                            <td>{car.CarBrand}</td>
                            <td>{car.CarName}</td>
                            <td>{car.CarColor}</td>
                            <td>{car.CarType}</td>
                            
                        </tr>
                    )}
                </tbody>
            </Table>
        );

    }
    spliceUrlString(page) {

        var num = page.slice(-1);
        console.log("sliced page: ", num);
        this.loadNextPage(num);
    }



    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderCarsTable(this.state.allCars);

        return (

            <div className=".hero-page">
                <h1><Badge bg="danger">Cars</Badge></h1>
                {contents}

                <Button variant="primary" disabled={!this.state.previousPage} onClick={() => { this.spliceUrlString(this.state.previousPage) }} > Previous Page</Button>{" "}
                <Button variant="primary" disabled={!this.state.nextPage} onClick={() => { this.spliceUrlString(this.state.nextPage) }} > Next Page</Button>

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Vehicle Brand</Form.Label>
                        <Form.Control type="text" onChange={this.handleUsernameChange} placeholder="Vehicle Brand" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Vehicle Make</Form.Label>
                        <Form.Control type="text" onChange={this.handlePasswordChange} placeholder="Vehicle Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Vehicle Model</Form.Label>
                        <Form.Control type="text" onChange={this.handlepasswordConfirmationChange} placeholder="Vehicle Color" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Vehicle Type</Form.Label>
                        <Form.Control type="text" onChange={this.handlepasswordConfirmationChange} placeholder="Vehicle Type" />
                    </Form.Group>
                    <Button disabled={this.state.username == "" || this.state.password == "" || this.state.passwordConfirmation == ""} variant="primary" onClick={() => { this.register() }}>
                        Add Vehicle
                    </Button>
                </Form>
                {this.state.serverCallStatus}
            </div>


        );
    }




}
//hide the add and update forms?
//https://stackoverflow.com/questions/58605846/how-to-show-a-form-in-the-same-window-on-onclick-event-of-a-button-in-react-js
