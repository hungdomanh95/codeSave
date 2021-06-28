# xuất db
# cmd trong folder chứa project
  mongodump --db=game-city
  mongorestore --db=game-city

#  chuyển github 
  git remote -url origin `url trên git`

  git fetch --all && git reset --hard origin/Bloodv4

  docker attach bloodTown 
  Ctrl C 
  /var/www/BloodTown 

  rm -rf build
  npm run build

  pm2 list
  pm2 restart app
  pm2 log