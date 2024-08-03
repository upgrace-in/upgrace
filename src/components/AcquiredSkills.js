import Skill from "./mini/Skill";

export function SkillCon(props) {
    return (
        <div className='container mx-auto' style={{ marginTop: props.sec ? '0px' : 150 + 'px' }}>
            <div className="mx-auto text-center">
                {props.hide && <img className="mx-auto dots_img" style={{ width: 8 + '%' }} src="assets/dots.png" alt="image not found" />}
                <h3>Hands On</h3>
                <p>(from <a href="https://udemy.com" target="_blank">udemy</a>, <a href="https://freecodecamp.org" target="_blank">freecodecamp</a> and many other sources...)</p>
            </div>
            <br />
            <div className="servi" style={{ paddingLeft: 20 + 'px', marginTop: 10 + 'px' }}>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="serv_list">
                            <Skill skill="JavaScript (Typescript, jQuery, Vanilla...)" />
                            <Skill skill="ReactJS (using Libraries Mostly)" />
                            <Skill skill="NextJS with Mongo (next-auth, mongoose, zod...)" />
                            <Skill skill="Python (Requests, Beautifulsoup, Urllib3...)" />
                            <Skill skill="Django / Flask (Basics)" />
                            <Skill skill="PHP with SQL (Basics)" />
                            <Skill skill="Solidity (with Truffle, Ganache)" />
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="serv_list">
                            <Skill skill="Decentralized Apps (Minting, Staking, Presale...)" />
                            <Skill skill="Smart Contracts (NFTs, Tokens, Coins...)" />
                            <Skill skill="AI Integrations (ChatGPT, Ollama...)" />
                            <Skill skill="Server Management (AWS EC2/S3, Contabo, DigitalOcean...)" />
                            <Skill skill="API Integrations (Google Apps, Twilio, OpenAI...)" />
                            <Skill skill="Payment Gateways (Paypal, Stripe, Razorpay...)" />
                            <Skill skill="MLM Algos (Levels, Binary, Autopool...)" />
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
                {SkillCon({ hide: true, sec: true })}
            </div>
        </div>
    )
}