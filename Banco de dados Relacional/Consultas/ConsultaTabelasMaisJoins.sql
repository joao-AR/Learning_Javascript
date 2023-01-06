
-- Seleciona somente as linhas da tabela que o id da cidade está na FK da tabela de prefeitos
select * from cidades c inner join prefeitos p on c.id = p.cidade_id;

-- Seleciona as linhas da tabela que o id da cidade está na FK da tabela de prefeitos e o resto da tabela a esquerda(cidades)
select * from cidades c left join prefeitos p on c.id = p.cidade_id;

-- Seleciona as linhas da tabela que o id da cidade está na FK da tabela de prefeitos e o resto da tabela a direita(prefeitos)
select * from cidades c right join prefeitos p on c.id = p.cidade_id;

-- Seleciona todas as linhas de todas as tabelas (full join)
select * from cidades c left join prefeitos p on c.id = p.cidade_id
union
select * from cidades c right join prefeitos p on c.id = p.cidade_id