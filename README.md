# :desktop_computer: Porfolio

## :briefcase: Stacks

✅ JavaScript/TypeScript
✅ React/NextJs
✅ Mongo/noSQL
✅ Node/Express

## :hammer: Tools

- Git (`git -v`)
- NodeJs (`node --version`/`npm --version`)
- VS Code
- Yarn (`yarn -v`)

Abaixo alguns comandos básicos e essenciais de Git.

## :unicorn: Tipos e Descrição

- :smile: Ativar usuário:
<table>
<thead>
<tr>
    <th>Comando</th>
    <th>Resultado/Explicação</th>
</tr>
</thead>

<tbody>
<tr>
    <td><code>ssh-keygen -t rsa -b 4096 -C "email"</code></td>
    <td>Vincular conta</td>
</tr>
<tr>
    <td><code>eval $(ssh-agent -s)</code></td>
    <td>Vincular conta</td>
</tr>
<tr>
    <td><code>ssh-add ~/.ssh/id_rsa</code></td>
    <td>Vincular conta</td>
</tr>
<tr>
    <td><code>clip < ~/.ssh/id_rsa.pub</code></td>
    <td>Vincular conta</td>
</tr>
<tr>
    <td><code>git config --global user.email "email"</code></td>
    <td>Vincular conta</td>
</tr>
<tr>
    <td><code>git config --golbal user.name "username"</code></td>
    <td>Vincular conta</td>
</tr>
</tbody>
</table>

- :star_struck: Criação de repositório:
<table>
<thead>
<tr>
    <th>Comando</th>
    <th>Resultado/Explicação</th>
</tr>
</thead>

<tbody>
<tr>
    <td><code>git init</code></td>
    <td>Criar repositório local</td>
</tr>
<tr>
    <td><code>git clone github.com/repositorio.git</code></td>
    <td>Clonar repositório</td>
</tr>
<tr>
    <td><code>mkdir folder-name</code></td>
    <td>Criar pasta/diretório</td>
</tr>
<tr>
    <td><code>touch file.ext</code></td>
    <td>Criar arquivo</td>
</tr>
<tr>
    <td><code>code .</code></td>
    <td>Abrir editor</td>
</tr>
</tbody>
</table>

- :stuck_out_tongue_winking_eye: Versionamento git:
<table>
<thead>
<tr>
    <th>Comando</th>
    <th>Resultado/Explicação</th>
</tr>
</thead>

<tbody>

<tr>
    <td><code>git add .</code></td>
    <td>Preparar todos arquivos</td>
</tr>
<tr>
    <td><code>git add file.ext</code></td>
    <td>Preparar arquivo específico</td>
</tr>
<tr>
    <td><code>git commit -m "Comment commit"</code></td>
    <td>Commit Git</td>
</tr>
<tr>
    <td><code>git remote add origin https://github.com/user/folder-name</code></td>
    <td>Criar entrada no repositório</td>
</tr>
<tr>
    <td><code>git push --set-upstream origin main</code></td>
    <td>Enviar push para main do repositório (Primeiro acesso local-remoto)</td>
</tr>
<tr>
    <td><code>git push</code></td>
    <td>Enviar ao repositório remoto na branch de acesso</td>
</tr>
<tr>
    <td><code>git status</code></td>
    <td>Verificar a condição da branch</td>
</tr>
<tr>
    <td><code>git branch</code></td>
    <td>Exibir branches do repositório</td>
</tr>
<tr>
    <td>git clone -b branch-name --single-branch repository-name</td>
    <td>Clone de branch específica</td>
</tr>
<tr>
    <td><code>git restore file.ext</code></td>
    <td>Desfazer o commit do arquivo específico</td>
</tr>
<tr>
    <td><code>git checkout file.ext</code></td>
    <td>Desfazer o commit do arquivo específico</td>
</tr>
<tr>
    <td><code>git --dif</code></td>
    <td>Exibir alterações realizadas</td>
</tr>
<tr>
    <td><code>git checkout -b branch-name</code></td>
    <td>Criar uma branch local</td>
</tr>
<tr>
    <td><code>git push --set-upstream origin branch-name</code></td>
    <td>Enviar push da nova branch</td>
</tr>
<tr>
    <td><code>git checkout branch-name</code></td>
    <td>Mudar para uma branch</td>
</tr>
<tr>
    <td><code>git push origin branch-name</code></td>
    <td>Enviar para branch</td>
</tr>
<tr>
    <td><code>git checkout main</code></td>
    <td>Retornar para branch main</td>
</tr>
<tr>
    <td><code>git pull origin branch-name</code></td>
    <td>Atualizar repositório local</td>
</tr>
<tr>
    <td><code>git push --set-upstream origin branch-name</code></td>
    <td>Enviar push branch</td>
</tr>
<tr>
    <td><code>git commit --amend --no-edit</code></td>
    <td>Editar commit anterior</td>
</tr>
<tr>
    <td><code>git push -f origin main</code></td>
    <td>Editar commit anterior</td>
</tr>
<tr>
    <td><code>git log</code></td>
    <td>Exibir histórico de versão</td>
</tr>
<tr>
    <td><code>git log --oneline</code></td>
    <td>Exibir histórico de todas versões</td>
</tr>
</tbody>
</table>

- :face_exhaling: Pacotes node:
<table>
<thead>
<tr>
    <th>Comando</th>
    <th>Resultado/Explicação</th>
</tr>
</thead>

<tbody>
<tr>
    <td><code>npm init -y</code></td>
    <td>Instalar pacote</td>
</tr>
<tr>
    <td><code>npm install package-name</code></td>
    <td>Instalar pacote</td>
</tr>
<tr>
    <td><code>npm uninstall package-name</code></td>
    <td>Remover pacote</td>
</tr>
</tbody>
</table>

- :stuck_out_tongue_winking_eye: Comandos diários git:
<table>
<thead>
<tr>
    <th>Comando</th>
    <th>Resultado/Explicação</th>
</tr>
</thead>

<tbody>

<tr>
    <td><code>git init</code></td>
    <td>Iniciar repositório local</td>
</tr>
<tr>
    <td><code>git remote add origin repository-remote.git</code></td>
    <td>Vincular repositório local com remoto</td>
</tr>
<tr>
    <td><code>git pull origin main</code></td>
    <td>Atualizar repositório local</td>
</tr>
<tr>
    <td><code>git add .</code></td>
    <td>Preparar todos arquivos local</td>
</tr>
<tr>
    <td><code>git commit -m "Commit commentary"</code></td>
    <td>Criar Commit</td>
</tr>
<tr>
    <td><code>git branch -M main</code></td>
    <td>Criar Commit</td>
</tr>
<tr>
    <td><code>git push --set-upstream origin main</code></td>
    <td>Enviar arquivos local para remoto</td>
</tr>
</tbody>
</table>

## :unicorn: Author

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/bhigoreduardo">
        <img src="https://avatars.githubusercontent.com/u/96431991?v=4" width="100px;" alt="Foto do Higor Eduardo no GitHub"/><br>
        <sub>
          <b>Higor Eduardo</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<details>
<summary><b>Regras de negócio</b></summary>

### :scroll: Ideias

## Ecommerce

- **Calçados**
- **Roupas**
- **Lanhonetes**
- **Pet Shop:**
- **Mercado:**
  
## Sistema

- **Gestão Loja**
- **Gestão Auto Peças**
- **Gestão Mercado**

## Institucional

- **Chat/Gestão conteúdo**
