import FooterLogo from '@/assets/FooterLogo.png'
import './Footer.css'

function Footer(){
    return(
        <footer className = "footer">
            <div className = "footerContent">
                <div className = "footerLogo">
                    <img src={FooterLogo} alt="" />
                </div>

                <p className = "footerText">
                    Budget Wise &copy; {new Date().getFullYear()} all rights reserved
                </p>
            </div>
        </footer>
    );

}

export default Footer