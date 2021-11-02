function initAce() {
    const editor = ace.edit("editor");

    editor.setTheme("ace/theme/tomorrow_night_eighties");
    editor.session.setMode("ace/mode/javascript");
    editor.setOptions({ fontSize:"15pt" });
    editor.setOption('showLineNumbers', false);
    editor.renderer.setShowGutter(false);
    editor.session.setUseWorker(false);
    editor.setReadOnly(true);

    editor.setValue(`
<module demo>

    <method setup>

        function() {
            console.log('Hello World!');
        }

    </method>

</module>`, 1);
}

(async function() {
    fetch("./assets/languages.json")
    .then(res => res.json())
    .then((languages) => {
        if (!window.location.href.includes("docs.html") && !window.location.href.includes("team.html")) {
            const lang = languages[localStorage.getItem("NF-language") || "English"]['Home'];
            class Body extends HTMLElement {
                constructor(){
                    super();
                }

                connectedCallback() {

                    this.innerHTML = `
                    <div class="start">
                        <img src="./assets/images/logo.png" class="logo" alt="logo" height="500">
                        <div class="about">
                            <h1><i>${lang['What-is-NFramework']}</i></h1>
                            <p><i>NFramework</i> ${lang['NFramework-is']}</p>
                            <button class="btn-started"><a href="docs.html"><i class="fas fa-play-circle" style="margin-right: 10px;"></i>${lang['GET-STARTED']}</a></button>
                            <button class="btn-github" onclick="window.open('https://github.com/N1ghtTeam/NFramework');"><i class="fab fa-github"></i> GITHUB</button>
                        </div>
                    </div>

                    <div style="width: 100%; background: rgb(10,10,10)">
                        <div class="features" id="feature0">
                            <div>
                                <div>
                                    <div>
                                        <h2>${lang['Feature0-title']}</h2>
                                        <p>
                                            ${lang['Feature0-content']}
                                        </p>
                                    </div>
                                    <div>
                                        <h2>${lang['Feature1-title']}</h2>
                                        <p>
                                            ${lang['Feature1-content']}
                                        </p>

                                    </div>

                                    <div>
                                        <h2>${lang['Feature2-title']}</h2>
                                        <p>
                                            ${lang['Feature2-content']}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="features" id="feature1">
                            <div class="left-editor">
                                <p>- ${lang['Demo0']}</p>
                                <p>- ${lang['Demo0-1']}</p>
                            </div>
                            <div id="editor"></div>
                            <div class="right-editor">
                                <h2>Output:</h2>
                                <p><b>></b> Hello World!</p>
                            </div>
                        </div>

                        <div class="features"></div>
                    </div>

                    <footer>
                        <img src="./assets/images/team.png" alt="logoTeam" height="80">
                        <p>Copyright © ${new Date().getFullYear()} N1ghtTeam.</p>
                    </footer>
                    `;
                }
            }
            customElements.define('web-body', Body);

            initAce();
        }
        else if (window.location.href.includes("team.html")) {
            const lang = languages[localStorage.getItem("NF-language") || "English"]['Team'];
            class Body extends HTMLElement {
                constructor(){
                    super();
                }

                connectedCallback() {

                    this.innerHTML = `
                        <div style="width: 100%; background: rgb(10,10,10)">
                            <div class="about-team">
                                <h1>${lang['Header']}</h1>
                                <div class="member">
                                    <img src="./assets/images/avatars/NCoder.png" height="100" alt="founder">
                                    <h2>${lang['Founder']} - NCoder</h2>
                                    <div class="member-body">
                                        <a href="https://github.com/dnblue-code"><i class="fab fa-github"></i> Github</a> |
                                        <a href="#"><i class="fab fa-facebook"></i> Facebook</a> |
                                        <a href="#"><i class="fab fa-discord"></i> Discord</a>
                                        <p><i class="fas fa-map-marker-alt"></i> Vietnam</p>
                                    </div>
                                </div>

                                <div class="member">
                                    <img src="./assets/images/avatars/SilverbossTD.png" height="100" alt="founder">
                                    <h2>${lang['Member']} - SilverbossTD</h2>
                                    <div class="member-body">
                                        <a href="https://github.com/silverbosstd"><i class="fab fa-github"></i> Github</a> |
                                        <a href="#"><i class="fab fa-facebook"></i> Facebook</a> |
                                        <a href="#"><i class="fab fa-discord"></i> Discord</a>
                                        <p><i class="fas fa-map-marker-alt"></i> Cao Lanh, Vietnam</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <footer>
                            <img src="./assets/images/team.png" alt="logoTeam" height="80">
                            <p>Copyright © ${new Date().getFullYear()} N1ghtTeam.</p>
                        </footer>
                    `;
                }
            }
            customElements.define('web-body', Body);
        }
    });
})();
