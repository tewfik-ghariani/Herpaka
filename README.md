Hi there!

This is only a beta version, follow these instructions to use our prototype and contribute in the development process of our Shop


1) composer update

2) bower install

3)  app/console doctrine:mongodb:schema:create --index

4) app/console crontasks:default [ Only One Time ]

4)  crontab -e 

=> add this line while adjusting the path to your project file


*/5 * * * * php {PATH_To_YOur_File}/app/console crontasks:run

_______________________________________________

If you follow these instructions properly, you may find the products updated automatically at /list
Enjoy!


