Laptop:
cd ~/Coding/arjun-website
# Make your changes
git add .
git commit -m "Update content"
git push

RPi:
cd ~/arjun-website
git pull
npm run build
sudo cp -r build/* /var/www/ashwinkaushik/