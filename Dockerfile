FROM node:alpine
LABEL maintainer="fabianoad@ibm.com"

# hadolint ignore=DL3017
RUN apk update && apk upgrade

# Install the application
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
WORKDIR /app
RUN npm install
RUN npm install react-scripts@4.0.3 -g --silent

# Support to for arbitrary UserIds
# https://docs.openshift.com/container-platform/3.11/creating_images/guidelines.html#openshift-specific-guidelines
RUN chmod -R u+x /app && \
    chgrp -R 0 /app && \
    chmod -R g=u /app /etc/passwd

ENV PORT 3000
EXPOSE 3000

CMD ["npm", "start"]
