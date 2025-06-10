FROM cubejs/cube:latest

# Copy your schema directory structure into the container
COPY cubejs-schema/ /cube/conf/

COPY .env /cube/conf/.env

# Ensure proper permissions for the entire directory structure
RUN chown -R node:node /cube/conf

# The base image already sets the correct working directory and user
# No need to change CMD or ENTRYPOINT