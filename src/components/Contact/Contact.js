import React from 'react'
import { ListGroup } from 'react-bootstrap';


const Contact = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron title="Contact" />
            <div className="container">
                <div className="row">
                    <div className="col-4">

                     <ListGroup>
                            <ListGroup.Item action href="mailto:anna_navales@yahoo.com"> <i class="far fa-envelope"></i>Email</ListGroup.Item>
                            <ListGroup.Item action href="https://github.com/ANavales" target="_blank"><i class="fab fa-github"></i> </ListGroup.Item>
                            <ListGroup.Item action href="assets/AnnaNavalesResume2021.pdf" target="_blank"> <i class="fas fa-file-pdf"></i></ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Contact;
