import Skill from "./mini/Skill";

export default function AcquiredSkills() {
    return (
        <div className="overlay serv_con">

            <div className="cls_con stagger serv_stagger">
                <i className="s_clsbtn fas fa-arrow-circle-left"></i>
            </div>
            <div className="container mx-auto stagger serv_stagger con_cards" style={{ marginTop: 100 + 'px' }}>
                {/* <div className="head4" style={{ fontSize: '3rem', fontWeight: '700' }}>
                    Hands On
                </div> */}
                <div className="mx-auto text-center">
                    <img className="mx-auto dots_img" style={{ width: 8 + '%' }} src="assets/dots.png" alt="image not found" />
                    <h3>Hands On</h3>
                    <p>(from <a href="https://udemy.com" target="_blank">udemy</a>, <a href="https://freecodecamp.org" target="_blank">freecodecamp</a> and many other sources)</p>
                </div>
                <br />
                <div className="servi" style={{ paddingLeft: 20 + 'px', marginTop: 10 + 'px' }}>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="serv_list">
                                <Skill skill="dApp Creation (Contracts + Wallets Integration)" />
                                <Skill skill="Realtime Application" />
                                <Skill skill="Realtime Applications" />
                                <Skill skill="Web Scraping" />
                                <Skill skill="UI/UX To Frontend (using React)" />
                                <Skill skill="Api Integrations" />
                                <Skill skill="Payment Gateway Integrations" />
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="serv_list">
                                <Skill skill="Backend Development (using Python)" />
                                <Skill skill="Scripting Works" />
                                <Skill skill="Cloud Management" />
                                <Skill skill="CMS (Wordpress, Wix, SquareSpace)" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}