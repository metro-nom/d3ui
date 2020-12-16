FROM frolvlad/alpine-python3 as base

# Make application directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Add Python requirements
COPY .env /usr/src/app/
COPY requirements.txt /usr/src/app/
RUN pip install --no-cache -r /usr/src/app/requirements.txt

############# Python development build stage

FROM base as pydev

# Add Python development requirements
COPY requirements-test.txt /usr/src/app/
RUN pip install --no-cache -r /usr/src/app/requirements-test.txt

############# JavaScript development build stage

FROM node:13-alpine as jsdev

# Make application directory (for consistency)
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Add JS requirements separately so that we don't need to reinstall every
# time something in the source tree changes on the host
COPY package.json /usr/src/app
COPY .env /usr/src/app/
RUN cd /usr/src/app && \
    npm install .

############# JavaScript minification build stage

FROM jsdev as builder

# Add JS source
COPY ./d3ui/src /usr/src/app/d3ui/src
COPY ./d3ui/static /usr/src/app/d3ui/static
# Build production JS assets
RUN npm run build_dev
#RUN npm run build

############# Production stage

FROM base as production

# Add app source
COPY ./d3ui /usr/src/app/d3ui
# Add built production JS assets
COPY --from=builder /usr/src/app/d3ui/static /usr/src/app/d3ui/static

ENV WEB_CONCURRENCY 1
WORKDIR /usr/src/app
EXPOSE 8091
USER nobody
CMD ["gunicorn", "-b", "0.0.0.0:8091", "--workers", "3", "--access-logfile", "-", "d3ui:app"]
