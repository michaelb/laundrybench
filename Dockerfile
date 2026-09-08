# Simple docker file to clone a git repo and host its contents via nginx
# assumes a static site with an index.html that lives in the root of the repo
FROM nginx

#install git
RUN apt-get update -y && apt-get install -y git

RUN git clone https://github.com/michaelb/laundrybench temp
RUN find temp/index.html -type f -exec sed -i 's|lb_chart.js|laundrybench/lb_chart.js|g' {} +
RUN mkdir -p /usr/share/nginx/html/
RUN mv temp/*.html /usr/share/nginx/html/
RUN mv temp/*.js /usr/share/nginx/html/

# run nginx in foreground so container doesn't immediately exit.
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# HOWTO:
# To build this image, run `docker build -t {name} .`
