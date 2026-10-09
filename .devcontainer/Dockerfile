FROM node:22-bookworm

WORKDIR /workspace

# Keep npm's cache inside the container workspace.
# This makes the development environment self-contained.
RUN npm config set cache /workspace/.npm-cache

# Give the non-root "node" user ownership of the workspace.
RUN chown -R node:node /workspace

USER node

EXPOSE 5173

CMD ["sleep", "infinity"]