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
    <div>
        <div className="row">
            <div className="col-md-12">
                <div className="gallery">
                    <h1>Gallery</h1><br></br>
                    <a target="_blank" href={trees_info_1}>
                        <img src={trees_info_1} alt="Cinque Terre"width="500" height="400" />
                    </a>
                    <a target="_blank" href={trees_info_2}>
                        <img src={trees_info_2} alt="Cinque Terre"width="500" height="400" />
                    </a>
                    <a target="_blank" href={trees_info_3}>
                        <img src={trees_info_3} alt="Cinque Terre"width="500" height="400" />
                    </a>
                    <br></br>
                    <a target="_blank" href={trees_info_4}>
                        <img src={trees_info_4} alt="Cinque Terre"width="500" height="400" />
                    </a>
                    <a target="_blank" href={trees_info_5}>
                        <img src={trees_info_5} alt="Cinque Terre"width="500" height="400" />
                    </a>
                    <a target="_blank" href={trees_info_6}>
                        <img src={trees_info_6} alt="Cinque Terre"width="500" height="400" />
                    </a>
                    <br></br>
                    <br></br>

                    <a href={how_to_plant_a_tree} download>
                        <button type="button" className="btn btn-primary btn-lg">
                            <i class="fa fa-download"></i>  How to Plant a Tree
                        </button>
                    </a>

                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
    </div>
);

export default contact_us;