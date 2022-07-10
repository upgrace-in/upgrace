export default function Contact() {
    return (
        <div className="overlay contact_con">
            <div className="cls_con stagger contact_stagger">
                <i className="c_clsbtn fas fa-arrow-circle-left"></i>
            </div>
            <div className="container mx-auto text-center stagger contact_stagger con_cards" style={{ marginTop: 100 + 'px' }}>
                <div className="col-md-8 mx-auto text-center">
                    <div className="row">
                        <img className="contacts_img" style={{ width: 10 + '%' }} src="assets/contacts.png" alt="" />
                        <div className="head_new2" style={{ marginLeft: 20 + 'px', marginTop: 5 + 'px' }}>
                            Let’s talk!
                        </div>
                    </div>
                    <br />

                    <div className="head_new text-left" style={{ marginTop: 5 + 'px' }}>
                        <hr />
                        <span className="txt">Tell us all about your project right here, or send us an email at <span style={{ color: '#8000FF', fontWeight: 600 }}>upgrace.in@gmail.com</span> or call us at <span style={{ color: '#8000FF', fontWeight: 600 }}>+91 7001617004</span></span>
                    </div>
                    <br />
                    <br />

                    <form action="" method="POST" className="text-left mr-auto form" style={{ marginBottom: 100 + 'px' }}>
                        <div className="form-group" style={{ marginBottom: 20 + 'px' }}>
                            <label htmlFor="name_id">Name & Company</label>
                            <input name="name" id="name_id" required type="text" placeholder="HariOm, Inc." className="form-control" />
                        </div>
                        <div className="form-group" style={{ marginBottom: 20 + 'px' }}>
                            <label htmlFor="mail_id">Email</label>
                            <input name="mail" id="mail_id" required type="email" placeholder="hari@pamho.org" className="form-control" />
                        </div>
                        <div className="form-group" style={{ marginBottom: 20 + 'px' }}>
                            <label htmlFor="budget_id">Your Budget</label>
                            <input name="budget" id="budget_id" required type="number" placeholder="$25+" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc_id">Project Description</label>
                            <textarea required placeholder="An application where I want to be able to buy properties where at that moment they are cheaper and when they go up in price sell them. Search opportunities according to supply and demand of the countries, analyzing the situations that happen. Example how hurricanes, earthquakes, economy, politics etc... affect." name="desc" id="desc_id" className="form-control" rows="6"></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">SEND</button>
                    </form>
                </div>
            </div>
        </div>
    )
}