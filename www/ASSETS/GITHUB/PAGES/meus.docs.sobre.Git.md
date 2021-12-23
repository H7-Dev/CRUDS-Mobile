
### Git bash (cmds - basicos)
> 
> - git remote add <name> <url> será o comando mais comumente usado. É assim que você pode anexar um controle remoto ao seu repositório.    
>    - ` git remote add origin ` apenas o comando
>    - ` git remote add origin https://github.com/username/remote-repository` comando + a url do repositório no github
> - git remote remove <nome> é bastante autoexplicativo e também é usado com freqüência. Se você não deseja ter um controle remoto específico anexado ao seu repositório, apenas passe seu nome para este comando e esse controle remoto será completamente removido. Não vai persistir no histórico, no cache ou em qualquer outro lugar:
>        
>   - `git remote remove origin `   apenas o comando
>   - `git remote remove origin https://github.com/username/remote-repository` comando + a url do repositório no github
> - #### :exclamation:**Obs:** 
>   - **"Remote origin already exists" error:** O erro `fatal: origem remota já existe` é causado quando você tenta criar um link para um repositório remoto chamado “origem” quando um link remoto com esse nome já está configurado. A solução é atualizar a URL do repositório remoto com o nome “origin” para a URL do repositório remoto que você deseja adicionar, em vez de tentar criar um novo repositório remoto com esse nome. Você pode fazer isso com este comando.   
>       - `git remote set-url origin https://github.com/your/repository`
>   - **Remote “origin” might've been configured if you cloned the repo:** É importante notar que usar “origin” para o nome de seu repositório remoto padrão é simplesmente uma convenção - você pode nomear seu “queijo” remoto padrão para toda a diferença que isso faria.
>   - [Ref.: "Remote origin already exists" error ](https://www.datree.io/resources/git-error-fatal-remote-origin-already-exists        )

### Git Branches: List, Create, Switch to, Merge, Push, & Delete => [ref.: link](https://www.nobledesktop.com/learn/git/git-branches)        
>        
> - Excluir ramos:
>                
>    - `git branch -D my-branch-name`
>        
>     - git branch --delete --force
>       
