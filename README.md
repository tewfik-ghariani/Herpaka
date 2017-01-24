Hi there!

Before starting to use our shop, you have to set your environment.
Don't worry, you need to follow these steps and you'll be ready!  

*)php
sudo apt-get install php5-cli
sudo apt-get install php5-mongo

*)apache2
sudo apt-get install apache2

*)Composer
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === 'aa96f26c2b67226a324c27919f1eb05f21c248b987e6195cad9690d5c1ff713d53020a02ac8c217dbf90a7eacc9d141d') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"

*)symfony
php composer.phar create-project symfony/framework-standard-edition test "2.8"

*)mongo
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install -y mongodb-org
[instructions:https://docs.mongodb.com/v2.6/tutorial/install-mongodb-on-ubuntu/?_ga=1.135214001.1418800532.1481154837]

Once you have set your environment, follow these instructions to use our prototype and contribute in the development process of our Shop:

1) composer update

2) bower install

3)  app/console doctrine:mongodb:schema:create --index

4) app/console crontasks:default [ Only One Time ]

4)  crontab -e 

=> add this line while adjusting the path to your project file


*/5 * * * * php {PATH_To_YOur_File}/app/console crontasks:run

_______________________________________________

If you follow these instructions properly, you may find the products updated automatically at /list
Enjoy using our online shopping website!


