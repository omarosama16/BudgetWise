import BudgetWiseLogo from '@/assets/BudgetWiseLogo.png'
import language from '@/assets/language.png'
import brightness from '@/assets/brightness.png'
import './Header.css'

function Header(){

    return(
        <header className = "Header">
            <div className = "Logo">
                <img src={BudgetWiseLogo} alt="Website Logo" />
            </div>

                <nav className = "nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </nav>

                <div className = "headerActions">
                    <a href="#">Login</a>
                    
                    <button className= "signupBtn">
                        <span>Sign Up</span>
                        <span>➤</span>
                    </button>

                    <button className= "themeBtn">
                        <div className= "themeCircle"></div>
                        
                        <div className= "themeImg">
                            <img src={brightness} alt="brightnessLogo" />
                        </div>
                    </button>

                    <button className = "languageBtn">
                        <span><img src={language} alt="language image" /></span>
                    </button>
                </div>
                
        </header>
    );

}

export default Header