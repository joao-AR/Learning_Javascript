use udemy; 

INSERT into cidades (nome,area,estado_id)
values ('Campinas',795,25);

INSERT into cidades (nome,area,estado_id)
values ('Niterói',133.9,19);

INSERT into cidades (nome,area,estado_id)
values (
	'Caruraru',
	920.6,
	(select id from estados where sigla = 'PE')
);

INSERT into cidades (nome,area,estado_id)
values (
	'Juazeiro do Norte',
	248.2,
	(select id from estados where sigla = 'CE')
);