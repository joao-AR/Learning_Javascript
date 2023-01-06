use udemy; 

Select 	regiao as 'Região', sum(populacao) as Total 
from estados 
group by regiao
order by Total desc

-- consulta a soma da população de todos 
Select sum(populacao) as Total 
from estados 
