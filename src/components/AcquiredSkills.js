import Skill from "./mini/Skill";

export function SkillCon(props) {
    return (
        <div className='container mx-auto' style={{marginTop: props.sec ? '0px' : 150+'px'}}>
            <div className="mx-auto text-center">
                {props.hide && <img className="mx-auto dots_img" style={{ width: 8 + '%' }} src="assets/dots.png" alt="image not found" />}
                <h3>Hands On</h3>
                <p>(from <a href="https://udemy.com" target="_blank">udemy</a>, <a href="https://freecodecamp.org" target="_blank">freecodecamp</a> and many other sources)</p>
            </div>
            <br />
            <div className="servi" style={{ paddingLeft: 20 + 'px', marginTop: 10 + 'px' }}>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="serv_list">
                            <Skill skill="dApp Creation (Contracts + Wallets Integration)" />
                            <Skill skill="NFT Minting" />
                            <Skill skill="NFT Staking" />
                            <Skill skill="NFT Marketplace" />
                            <Skill skill="Web Scraping (Python)" />
                            <Skill skill="UI/UX To Frontend" />
                            
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="serv_list">
                            <Skill skill="Backend Development (using Python)" />
                            <Skill skill="Scripting Works" />
                            <Skill skill="Cloud Management" />
                            <Skill skill="CMS (Wordpress, Wix, SquareSpace)" />
                            <Skill skill="API Integrations" />
                            <Skill skill="Payment Gateways" />
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function AcquiredSkills() {

    return (
        <div className="overlay serv_con">

            <div className="cls_con stagger serv_stagger">
                <i className="s_clsbtn fas fa-arrow-circle-left"></i>
            </div>
            <div className="container mx-auto stagger serv_stagger con_cards" style={{ marginTop: 100 + 'px' }}>
                {SkillCon({hide: true, sec: true})}
            </div>
        </div>
    )
}