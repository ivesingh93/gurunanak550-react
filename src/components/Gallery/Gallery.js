import React from 'react';
import './Gallery.css'
import trees_info_1 from '../../assets/trees_info_1.png';
import trees_info_2 from '../../assets/trees_info_2.png';
import trees_info_3 from '../../assets/trees_info_3.png';
import trees_info_4 from '../../assets/trees_info_4.png';
import trees_info_5 from '../../assets/trees_info_5.png';
import trees_info_6 from '../../assets/trees_info_6.png';
import how_to_plant_a_tree from '../../assets/How to Plant a Tree.docx';

const contact_us = () => (
    <div style={{color: '#777', backgroundColor: 'rgb(224, 213, 180)', padding: '30px 0' }} id="resources">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center mb-2">
                    <h2 style={{color: "#000"}}>Gallery</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <a target="_blank" href={trees_info_1} className="d-block mb-5 h-100">
                        <img src={trees_info_1} className="img-fluid img-thumbnail rounded mx-auto" />
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <a target="_blank" href={trees_info_2} className="d-block mb-5 h-100">
                        <img src={trees_info_2} className="img-fluid img-thumbnail rounded mx-auto" />
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <a target="_blank" href={trees_info_3} className="d-block mb-5 h-100">
                        <img src={trees_info_3} className="img-fluid img-thumbnail rounded mx-auto" />
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <a target="_blank" href={trees_info_4} className="d-block mb-5 h-100">
                        <img src={trees_info_4} className="img-fluid img-thumbnail rounded mx-auto" />
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <a target="_blank" href={trees_info_5} className="d-block mb-5 h-100">
                        <img src={trees_info_5} className="img-fluid img-thumbnail rounded mx-auto" />
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <a target="_blank" href={trees_info_6} className="d-block mb-5 h-100">
                        <img src={trees_info_6} className="img-fluid img-thumbnail rounded mx-auto" />
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <a href={how_to_plant_a_tree} download>
                        <button type="button" className="btn btn-primary btn-lg ">
                            <i class="fa fa-download"></i>  &nbsp;How to Plant a Tree
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default contact_us;