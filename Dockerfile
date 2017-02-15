FROM node:6.9.5
RUN npm install --global kote
CMD kote -f
