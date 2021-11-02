class Header extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {

        this.innerHTML = `
            <header>
                <nav>
                    <nav>
                        <h2><a href="index.html">NFramework</a></h2>
                        <p id="header-framework-version">&nbsp;&nbsp;v1.0</p>
                    </nav>
                    <ul>
                        <input type="text" placeholder="Search...">
                        <li><a href="docs.html">Docs</a></li>
                        <li><a href="team.html">Team</a></li>
                        <li><a href="#">Languages</a><i class="fas fa-sort-down" style="margin-left: 5px; position: absolute; top: 10px;"></i></li>
                    </ul>
                </nav>
            </header>
            `;
    }
}

customElements.define('web-header', Header);
