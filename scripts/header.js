class Header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        
        this.innerHTML=`
        
            <header>
                <nav>
                    <nav>

                        <h2 onclick="window.location.href=window.origin+'/index.html';">NFramework</h2>
                        <p id="header-framework-version">&nbsp;&nbsp;v1.0</p>

                    </nav>
                    <ul>
                        <input type="text" placeholder="Search...">
                        <li><a  onclick="window.location.href=window.origin+'/docs.html';">Docs</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#"><i class="fas fa-language"></i> Languages</a></li>
                    </ul>
                </nav>

            </header>
        
        `;

    }

}
customElements.define('web-header', Header);