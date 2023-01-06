-- Modificando coluna da tabela 
alter table empresas modify cnpj varchar(14);

insert into empresas (nome,cnpj) 
values 
('Bradesco',04526320000130),
('Vale',98586233000112),
('Cielo',95209408000184);


insert into empresas_unidades (empresa_id,cidade_id,sede)
values
(1,1,1),
(1,2,0),
(2,1,0),
(2,2,1);

-- consulta a descrição da tabela (tipo de cada coluna (int,varchar...) Fk ou PK etc...)
desc empresas