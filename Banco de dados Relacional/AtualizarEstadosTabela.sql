use udemy; 
UPDATE 
	estados
SET 
	nome = 'maranhão'
WHERE 
	sigla = 'MA';

select est.nome from  estados est where sigla = 'MA';

