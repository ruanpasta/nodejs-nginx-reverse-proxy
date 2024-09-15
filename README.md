
# Proxy reverso com Node e Nginx

Esse projeto tem como objetivo fazer um proxy reverso com Node e Nginx.

## Rodando

Para rodar o projeto use o comando:

```bash
docker compose up -d
```

Isso ira rodar o projeto na porta http://localhost:8080/

## Usando

Apos a / coloque nomes que serao incluidos no banco de dados do MySQL.

Ex:
http://localhost:8080/Joao
http://localhost:8080/Maria

Verifique no msql os nomes dos usuarios na tabela `people` dentro do banco `nodedb`.

Para isso acesse o container `db`:

```bash
docker exec -it db bash
```

Acesse o usuario root do mysql:

```bash
mysql -uroot -p

# use a senha: root
```

Use o database `nodedb`:

```bash
use nodedb;
```

E verifique se o usuario que voce criou ao acessar ex: localhost:8080/Joao aparece na tabela de people:

```sql
select * from people;
``` 