set dbPath="F:\an\MongoDB"

cd %dbPath%
mkdir data
mkdir logs
cd Server\3.2\bin
mongod --dbpath=%dbPath%\data --logpath=%dbPath%\logs\mongodb.log --install
net start MongoDB