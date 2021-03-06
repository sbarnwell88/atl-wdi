1. SELECT matchid, player FROM goal WHERE TEAMID = 'GER';

2. SELECT game.id,game.stadium,game.team1,game.team2
FROM game 
INNER JOIN goal ON game.id = matchid
WHERE goal.matchid = 1012
AND goal.player = 'Lars Bender';

3. SELECT player,teamid,stadium, mdate
  FROM game JOIN goal ON (id=matchid)
WHERE teamid = 'GER';

4. SELECT team1, team2, player 
FROM game 
JOIN goal ON (id=matchid)
WHERE player LIKE 'Mario%';

5. SELECT player, teamid, coach, gtime
 FROM goal 
JOIN eteam ON teamid=id
WHERE goal.gtime<=10;

6. SELECT mdate, teamname
FROM game 
JOIN eteam ON (team1=eteam.id)
WHERE eteam.coach = 'Fernando Santos';

7. SELECT player 
FROM goal 
JOIN game ON (matchid=game.id)
WHERE game.stadium = 'National Stadium, Warsaw';

8. SELECT DISTINCT player
FROM game JOIN goal ON (matchid=game.id) 
WHERE (team1='GER' OR team2='GER')
AND teamid != 'GER';

9. SELECT teamname, COUNT(teamid)
  FROM eteam JOIN goal ON id=teamid
GROUP BY teamname
ORDER BY teamname;

10. SELECT stadium, COUNT(1)
FROM game
JOIN goal ON id=matchid
WHERE goal.gtime > 0
GROUP BY stadium
ORDER BY stadium;

11. 

12. SELECT matchid, mdate, COUNT(teamid)
FROM goal
JOIN game ON matchid = id
WHERE teamid = 'GER'
GROUP BY matchid, mdate, teamid
ORDER BY teamid;

13. 