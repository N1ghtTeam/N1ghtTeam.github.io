class Footer extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <img src="./assets/images/team.png" alt="logoTeam" height="80">
                <p>Copyright © ${new Date().getFullYear()} N1ghtTeam.</p>
            </footer>
        `;
    }
}

customElements.define('web-footer', Footer);
