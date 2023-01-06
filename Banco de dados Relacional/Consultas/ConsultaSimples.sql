-- Select Simples 1
SELECT * FROM estados;

-- Select Simples 2
SELECT 
    Sigla,
    nome as 'nome dp estado' 
FROM 
estados 
where 
regiao = 'Sul'

-- Select Simples 2

Select 
nome, regiao, populacao, 
FROM 
    estados where populacao >= 10 order by desc