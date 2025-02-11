const sobre = document.querySelector("#about");
const form = document.querySelector("#form");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGitHub() {
  try {
    const dadosPerfil = await fetch(
      `https://api.github.com/users/gaba-teixeira`
    );
    const perfil = await dadosPerfil.json();

    let conteudo = ` <img src="${perfil.avatar_url}" />
        <article id="about_text" class="flex about_content">
          <h2>Sobre mim</h2>
          <p>
            Tenho 26 anos, sou Paulistana e apaixonada por artes e cultura. Formada em teatro, atuei como atriz por cinco anos até a pandemia, quando embarquei em uma experiência transformadora na Califórnia. Durante os três anos que vivi lá, descobri minha paixão pela tecnologia e seu potencial criativo. Hoje, dedico-me integralmente à transição de carreira, estudando em tempo integral para me tornar desenvolvedora de software. Ah, e podem me chamar de Gaba!
          </p>
          <div id="about_github" class="flex">
            <a
              class="botao"
              href="${perfil.html_url}"
              target="_blank"
              >GitHub</a
            >
            <p>${perfil.followers} Seguidores</p>
            <p>${perfil.public_repos} Repositorios</p>
          </div>
        </article>
        
        
        
        `;

    sobre.innerHTML += conteudo;
  } catch (error) {
    console.error(error);
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const campoNome = document.querySelector("#nome");
  const txtNome = document.querySelector("#txtNome");
  if (campoNome.value.length < 3) {
    txtNome.innerHTML = "O nome deve ter no mínimo 3 caracteres.";
    campoNome.focus();
    return;
  } else {
    txtNome.innerHTML = "";
  }

  const campoEmail = document.querySelector("#email");
  const txtEmail = document.querySelector("#txtEmail");
  if (!campoEmail.value.match(emailRegex)) {
    txtEmail.innerHTML = "Digite um email válido.";
    campoEmail.focus();
    return;
  } else {
    txtEmail.innerHTML = "";
  }

  const campoAssunto = document.querySelector("#assunto");
  const txtAssunto = document.querySelector("#txtAssunto");
  if (campoAssunto.value.length < 3) {
    txtAssunto.innerHTML = "O Assunto deve ter no mínimo 3 caracteres.";
    campoAssunto.focus();
    return;
  } else {
    txtAssunto.innerHTML = "";
  }

  form.submit();
});

getApiGitHub();
