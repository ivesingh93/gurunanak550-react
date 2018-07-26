import React from 'react';

const contact_us = () => (
    <div>
        <section style={{pading: '50px 20px', position: 'relative', background: '#f7f7f7'}}>
            <div class="wrap">
                <div class="panel-left">
                    <h1>Get in Touch</h1>
                    <h3>Please fill out the quick form and we will be in touch you.</h3>

                    <div style={{marginTop: '30px'}}>
                        <div class="card-body p-3">
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                        </div>
                                        <input type="text" class="form-control" placeholder="Name" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                        </div>
                                        <input type="email" class="form-control" placeholder="Your email address" required/>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-comment text-info"></i></div>
                                        </div>
                                        <textarea class="form-control" placeholder="Message" required></textarea>
                                    </div>
                                </div>

                                <div class="text-center">
                                    <input type="submit" value="Enviar" class="btn btn-info btn-block rounded-0 py-2"/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default contact_us;