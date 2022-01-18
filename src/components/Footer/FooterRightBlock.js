const FooterRightBlock = ({ showModal }) => {
    const intFrameWidth = window.innerWidth;

    return ( 
        <div className="right-block">
            <div className="footer_cta cta">
                <button onClick={ showModal }>
                    Request Invite
                </button>
            </div>
            <div className="copyright">
                <p className="copyright_text">&copy;Alex Bejenaru - 2021{intFrameWidth < 1400 ? <span><br />All Rights Reserved</span> : <span>, All Rights Reserved</span>}</p>
            </div>
        </div>
     );
}
 
export default FooterRightBlock;